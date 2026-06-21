// SLIDE UNIVERSE — Prompt Compiler
// 実装上の重要方針: UIにプロンプト本文を直書きしない。
// userInput + stylePreset + detailSettings + corePromptBlocks を合成して最終プロンプトを返す。
// ブロック順序は 品質要件 §1-10 / コーディングレギュレーション §12 準拠。

import type { BuilderState, StylePreset, OutputDepth, BrandProfile } from './types'
import { hasBrandContent } from './types'
import {
  findUseCase,
  labelOf,
  GOALS,
  IMPRESSIONS,
  OUTPUT_DEPTHS,
} from '../data/questions'
import { defaultBalance } from './tuning'

const DIVIDER = '────────────────────────'

// ── 標準品質ルール（ユーザーは無効化できない / コーディング §13）──
export const STANDARD_QUALITY_RULES: string[] = [
  '1スライド1メッセージを徹底する',
  '本文は短く、簡潔にまとめる',
  '画像内に文字を焼き込まない',
  'Markdown記号をスライド本文に入れない',
  '内部指示やプロンプト文をスライドに出さない',
  '見出しだけで流れが通る構成にする',
  '最後はGoalに接続するストーリーにする',
]

function buildInputBlock(state: BuilderState, style: StylePreset): string {
  const useCase = findUseCase(state.useCase)?.label ?? '未設定'
  const goal = labelOf(GOALS, state.goal) ?? '未設定'
  const impressions =
    state.impressions.map((id) => labelOf(IMPRESSIONS, id)).filter(Boolean).join(' / ') || '未設定'
  const depth = OUTPUT_DEPTHS.find((d) => d.id === state.outputDepth)?.label ?? '標準'
  return [
    '【INPUT】',
    `Theme / Use Case: ${useCase}`,
    `Goal: ${goal}（視聴者に起こしたい最終行動）`,
    `Audience: ${state.audience.trim() || '未設定'}`,
    'Materials: NotebookLM に入っている資料一式',
    `Impression: ${impressions}`,
    `Style: ${style.name}（${style.nameEn}）`,
    `Output Level: ${depth}`,
  ].join('\n')
}

// ブランド前提（brand.md）。一般論を避けるための「判断基準」を最上位の制約として注入する。
// 記入のある項目だけを出力し、特に「使わない言葉／やらないこと」を絶対の禁止として強調する。
function buildBrandBlock(brand?: BrandProfile | null): string {
  if (!hasBrandContent(brand)) return ''
  const b = brand as BrandProfile
  const lines: string[] = ['【ブランド前提（brand.md）／最優先の判断基準】']
  lines.push(
    '・以下はこのブランドの判断基準。一般論・どこかで見た言葉を禁止し、すべての見出し・本文・ビジュアル方針をこの前提に従わせる。これは内部指示でありスライドに出さない。',
  )
  const add = (label: string, val: string) => {
    const v = val.trim()
    if (v) lines.push(`・${label}: ${v}`)
  }
  add('誰に届けるか', b.audience)
  add('約束する変化', b.promise)
  add('信じていること', b.belief)
  add('使う言葉（語彙・トーンを寄せる）', b.useWords)
  add('残したい印象', b.keepImpression)
  // 強い禁止は末尾にまとめて念押し
  const avoidW = b.avoidWords.trim()
  const avoidI = b.avoidImpression.trim()
  const notDo = b.notDo.trim()
  if (avoidW) lines.push(`・使わない言葉（絶対に出さない・言い換えも禁止）: ${avoidW}`)
  if (avoidI) lines.push(`・避けたい印象（この印象に寄せない）: ${avoidI}`)
  if (notDo) lines.push(`・やらないこと（提案・表現として持ち込まない）: ${notDo}`)
  return lines.join('\n')
}

function buildInternalInstructionBlock(): string {
  return [
    '【内部指示】',
    '・ここから下はあなたへの指示であり、スライドには一切表示しない。',
    '・この文章・見出し・例文をそのままスライド本文に使わない。',
    '・画像内に文字を描き込まない。',
    '・NotebookLM内の資料内容から要点を抽出し、言い換えて再生成する。',
    '・推測や一般論で内容を埋めない。資料（ソース）に書かれた事実・数字・固有名詞だけを使い、ソースにない常套句・一般論で水増ししない。不明な点は断定せず「条件付き」で示す。',
  ].join('\n')
}

function buildRoleBlock(state: BuilderState): string {
  const role = findUseCase(state.useCase)?.role ?? 'プレゼンテーションデザイナー兼編集者'
  return [
    '【Role】',
    `あなたは、日本のトップメディアを牽引するアートディレクター兼${role}。`,
    'スマホ世代の知的興奮を誘い、読み手が「今すぐ一歩動きたくなる」成果直結スライドを設計する。',
    'きれいなだけのスライドではなく、人を動かすスライドを作る。凡庸・テンプレ・説明過多を最も嫌う。',
  ].join('\n')
}

function buildGoalBlock(state: BuilderState): string {
  const goal = labelOf(GOALS, state.goal) ?? '視聴者の行動'
  return [
    '【Goal】',
    `・最優先はユーザーが入力したGoalの達成: 「${goal}」`,
    '・全スライドはこのGoalに収束させる。きれいさより、Goalへ動きたくなるかで判断する。',
  ].join('\n')
}

// 出力の作り方（神経設計: 注意→感情→理解→行動）。元サンプルの「0)出力の作り方」を核に据える。
function buildInformationTransformBlock(): string {
  return [
    '【出力の作り方（この順で内部設計してから生成する）】',
    'A. 抽出: 資料全体から、Goalに直結する要点だけを12〜18個抽出する（事実 / 主張 / 根拠 / 具体例 / 手順）。重複は統合し、曖昧な点は「条件付き」で表現する。',
    'B. 変換: 要点を「注意 → 感情 → 理解 → 行動」の順に並べ替える。最後は必ず「視聴者が次にやる一手」で終える（具体的で短く）。',
    'C. デッキ設計: 序盤＝違和感や問いで注意を奪い感情を刺す / 中盤＝最小限の図解で理解を構造化する / 終盤＝行動（次の一手・合意形成・問い合わせ導線）へ。同じレイアウトTYPEを3枚以上続けない。',
    'D. 各スライドの原則: 1スライド1メッセージ（結論/問い/命名を1つだけ）。本文は最大2行、3行になるなら分割。見出しだけを追っても話と感情の抑揚が通る。',
  ].join('\n')
}

// 比喩メタファーの統一（図解/イラスト系で効く・元サンプルの強力技法）
function buildMetaphorBlock(style: StylePreset): string {
  // 写真主役の編集系では比喩を強制しない（ビジュアル優先 high のイラスト/立体系で有効）
  if (style.tendencies.visualPriority !== 'high') return ''
  return [
    '【比喩メタファー（図解・イラストを使う場合）】',
    '・テーマから、最も直感的で自分ごと化しやすい比喩を1つだけ選ぶ（例: 都市 / 交通 / 料理 / 登山 / 工場 / 図書館 / ゲーム など）。',
    '・以後の図解・モチーフはその比喩に統一し、世界観をブレさせない。比喩を通じて、テーマの価値とGoalへの道筋が一目で腑に落ちるようにする。',
  ].join('\n')
}

function buildStoryArcBlock(state: BuilderState): string {
  const arc = findUseCase(state.useCase)?.storyArc ?? '注意 → 共感 → 理解 → 行動'
  return [
    '【Story Arc】',
    `・用途に合わせた流れ: ${arc}`,
    '・3〜4枚のかたまりで設計し、違和感 → 構造理解 → 行動 の強弱が「見出しだけ追っても分かる」ようにする。',
    '・表紙（1枚目）はシリーズ中で最もインパクトを強く。文字だけで寂しいを禁止し、最初の1枚で視線と意識を奪う。',
  ].join('\n')
}

// プリセット本文に残る原文プレースホルダを、実際の入力値へ置換する。
// （NotebookLM原文の {ゴール} / 【入力変数：テーマ】 / {Primary Color} 等を吸収）
function substitutePlaceholders(block: string, state: BuilderState, style: StylePreset): string {
  const theme = findUseCase(state.useCase)?.label ?? '資料のテーマ'
  const goal = labelOf(GOALS, state.goal) ?? '視聴者の行動'
  const audience = state.audience.trim() || '想定視聴者'
  const map: [RegExp, string][] = [
    [/【入力変数：テーマ】/g, theme],
    [/\{テーマ\}|\{Theme\}/g, theme],
    [/【入力変数：ゴール】/g, goal],
    [/\{ゴール\}|\{Goal\}/g, goal],
    [/\{想定視聴者\}|\{Audience\}/g, audience],
    [/\{Primary Color\}/g, style.brandColor],
    [/\{Accent Color\}/g, 'プリセット指定のアクセント色'],
  ]
  return map.reduce((acc, [re, val]) => acc.replace(re, val), block)
}

// 「文字 ⇄ ビジュアル」バランス（微調整スライダーの実値）を構成指示に翻訳する。
// 「文字が勝ちすぎ・イラストが添え物化」を防ぎ、ユーザーが毎回バランスを振れるようにする。
function buildBalanceInstruction(style: StylePreset, state: BuilderState): string {
  const balance = Number(state.tuning?.balance ?? defaultBalance(style))
  const lines: string[] = []
  if (balance >= 65) {
    lines.push(
      '・ビジュアル（図解/写真/イラスト）を主役にする。各スライドでビジュアルを画面のおおむね半分以上の存在感で配置し、文字だけで余白が間延びしたスライドを作らない。',
    )
    lines.push(
      '・文字のみのスライド（タイポグラフィ型）は全体の3分の1までに抑え、3枚以上連続させない。残りはビジュアル主役のスライドにする。',
    )
    lines.push('・装飾的に小さな要素を1つだけ浮かべて広い空白を残すのを避ける。主役ビジュアルは意味のある大きさで描く。')
  } else if (balance <= 35) {
    lines.push('・文字（見出しのタイポグラフィ）を主役にする。ビジュアルは要点を補助する範囲に留める。')
    lines.push('・ただし装飾的な小要素だけで広い空白を間延びさせない。1スライドに必ず1つは意味のあるビジュアルを置く。')
  } else {
    lines.push('・文字とビジュアルを均衡させる。見出しが大きいスライドには、必ず意味のあるビジュアルを添える。')
  }
  if (style.tendencies.textAmount === 'low') {
    lines.push('・本文は最小限に。見出しとビジュアルで理解させ、説明文で埋めない。')
  }
  return `【構成バランス（文字⇄ビジュアル: ${balance}/100）】\n${lines.join('\n')}`
}

function buildStyleOSBlock(style: StylePreset, state: BuilderState): string {
  const tuningLines = buildTuningInstructions(style, state)
  const impressions = state.impressions
    .map((id) => labelOf(IMPRESSIONS, id))
    .filter(Boolean)
    .join(' / ')
  const body = substitutePlaceholders(style.promptBlock, state, style)
  const balance = buildBalanceInstruction(style, state)
  return [
    '【Style OS】',
    `世界観プリセット: ${style.name}（${style.nameEn}）`,
    impressions
      ? `狙う印象: ${impressions}。配色・タイポ・写真/イラスト選定・余白の取り方を、この印象に寄せて調整する（プリセットの範囲内で）。`
      : '',
    body,
    balance ? `\n${balance}` : '',
    tuningLines ? `\n【プリセット内の微調整】\n${tuningLines}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

// 微調整パラメータ（ユーザーが動かした実値）を自然文の補正指示に変換
function buildTuningInstructions(style: StylePreset, state: BuilderState): string {
  const tv = state.tuning ?? {}
  const lines: string[] = []
  for (const t of style.tuning) {
    const val = tv[t.key] ?? t.defaultValue
    if (t.type === 'color') {
      lines.push(`・アクセント（差し色）は ${val} を起点にする（プリセットの配色ルールは維持する）。`)
    }
    // slider はユーザーが端に寄せた時だけ明示補正する
    if (t.type === 'slider') {
      const n = Number(val)
      if (n >= 65 && t.rightLabel) lines.push(`・${t.label}は「${t.rightLabel}」寄りにする。`)
      else if (n <= 35 && t.leftLabel) lines.push(`・${t.label}は「${t.leftLabel}」寄りにする。`)
    }
  }
  return lines.join('\n')
}

function buildSlideRulesBlock(): string {
  return ['【標準品質ルール（必ず守る）】', ...STANDARD_QUALITY_RULES.map((r) => `・${r}`)].join('\n')
}

// 全スタイル共通のアートディレクション基準（単調・凡庸な出力を防ぐ品質の底上げ）
function buildArtDirectionBlock(): string {
  return [
    '【アートディレクション（全スタイル共通の品質基準）】',
    '■ スタイル忠実（最優先・厳守）',
    '・上の【Style OS】の「描画/質感」と「禁止」を絶対の規範とする。スタイルが明示的に指定していない限り、勝手に立体アイソメ図（isometric）・3Dレンダ・ミニチュアフィギュア化・クレイ/粘土風・ワイヤーフレーム化に変換しない。',
    '・写真指定のスタイルは必ず実写ベースの写真/コラージュで、フラット指定のスタイルは平面の2Dで描く。画像生成モデルが既定で寄せがちな「アイソメ3Dイラスト」へ勝手に流れないこと。',
    '・各スタイルの世界観・画材・視点をそのまま守る。複数スタイルが似た見た目に収束するのを禁止する。',
    '■ ビジュアルの質',
    '・写真/イラスト/図解は、一流のアートディレクターが監修した高級エディトリアル誌の水準を目指す。ストックフォト感・テンプレ感・安っぽいクリップアートは禁止。',
    '・写真を使う場合は、光源・影・質感・色のグレーディングを具体的に指定し、被写体の表情や所作までディレクションする。雑味のない、意図された一枚にする。',
    '・各スライドの Visual Direction は「何を／どんな構図で／どこを大胆にクロップし／視線をどこへ誘導するか」まで具体的に書く。「美しい画像」「適切なイメージ」のような曖昧指示で終わらせない。',
    '■ 単調を避ける（最重要）',
    '・同じレイアウトTYPEを3枚以上連続させない。全面ビジュアル → テキスト主役 → 図解 を意図的に交互に配置し、視線のリズムを作る。',
    '・クロップと縮尺に変化をつける。極端な寄り（顔/手/部分）と大きな引き（全景）を混ぜ、毎スライド同じ構図にしない。',
    '・見出しと本文のジャンプ率を極端につける。中途半端なサイズを禁止。余白を恐れない。',
    '・1スライドに置く主役要素は1つだけ。脇役は徹底して抑え、密度のメリハリを作る。',
    '■ 一貫性と密度',
    '・シリーズ全体で、一流のビジネス/カルチャーメディアの特集記事をそのままスライド化したような、一貫したトーンと強弱を保つ。',
    '・各スライドは「見た瞬間に意図が立ち上がる」密度を持たせる（ただし1スライド1メッセージは死守）。',
    '■ プロの仕上げ（引き算と記憶）',
    '・余白は「設計対象」として意図的に大きく取り、要素で埋めない。端や最下部に、意味のない極小の英語ラベル・クレジット・ページ番号・ロゴを散らさない（引き算こそが品位を生む）。',
    '・画像の中に説明文を焼き込まない。文字は必ずテキスト要素として、レイアウトの一部として置く。',
    '・北極星を持つ: そのスタイルが手本とする一流の実例（媒体・作家・スタジオ・デザイン運動）を1つ念頭に置き、その水準を基準点にする。素人っぽい既製テンプレ感を徹底排除する。',
    '・記憶に残す仕掛けを、シリーズ中ごく少数だけ仕込む（意外なスケール・対比・1箇所のユーモア等）。ただし主役メッセージを邪魔せず、装飾の乱用にしない。1スライド1メッセージは死守。',
  ].join('\n')
}

// タイポグラフィ品位ガード（日本語・英語ともに字形の美しさを崩さない）
function buildTypographyGuard(): string {
  return [
    '【タイポグラフィ品位（日本語・英語ともに）】',
    '・日本語も英語も、文字は美しく扱う。字形を崩さない、歪ませない、文字化けさせない。',
    '・英語は飾りや埋め草にしない。意味のある語を、日本語と同等の品位とジャンプ率で組む。',
    '・X / Y / LAYER / API / PARAM / DEBUG などの内部的な語や、無意味な英語ラベルを表示しない。',
    '・四隅の極小英語ラベルを飾りで置かない。可読性とタイポグラフィの品位を最優先する。',
  ].join('\n')
}

function buildOutputFormatBlock(depth: OutputDepth | null, slideCount: string): string {
  const count =
    slideCount === 'auto' ? '内容に応じて最適な枚数で構成する' : `全${slideCount}枚で構成する`
  const head = ['【Slide Output Format】', `・${count}。`]
  if (depth === 'summary') {
    return [
      ...head,
      '・各スライドは Slide番号 / 役割 / Main Headline / 一言の要点 のみを簡潔に出力する。',
      '・ビジュアル指示は方向性の一言に留める。',
    ].join('\n')
  }
  if (depth === 'production') {
    return [
      ...head,
      '・各スライドについて以下を詳細に出力する:',
      '  - Slide Number',
      '  - Role in Story',
      '  - Slide Type',
      '  - Main Headline（日本語の強い言い切り。1つだけ）',
      '  - Optional English Tag（1〜4語。飾りでなくタグ/断言として）',
      '  - Lead Text（最大2行。結論の補助だけ）',
      '  - Visual Direction（被写体は何か／どんな構図か／どこを大胆にクロップするか／01-03のコールアウトで視線をどこへ誘導するか／光と質感）',
      '  - Layout Direction（グリッド・余白・非対称・主役の置き場所）',
      '  - Color / Typography Direction（配色の意味づけと、見出し:本文のジャンプ率）',
      '  - Action Hook（このスライドで視聴者の「次の一手」が頭に浮かぶ一言）',
    ].join('\n')
  }
  // standard
  return [
    ...head,
    '・各スライドについて以下を出力する:',
    '  - Slide Number',
    '  - Role in Story',
    '  - Slide Type',
    '  - Main Headline（日本語の言い切り）',
    '  - Lead Text（最大2行）',
    '  - Visual Direction（被写体・構図の方針）',
    '  - Action Hook（次の一手が浮かぶ一言）',
  ].join('\n')
}

function buildAdditionalRequestBlock(state: BuilderState): string {
  const req = state.detailSettings.additionalRequest.trim()
  if (!req) return ''
  return ['【追加要望】', req].join('\n')
}

function buildAdditionalProhibitionsBlock(state: BuilderState): string {
  const pro = state.detailSettings.additionalProhibitions.trim()
  if (!pro) return ''
  return ['【追加の禁止事項】', pro].join('\n')
}

function buildFinalCheckBlock(): string {
  return [
    '【Final Check（出力前に必ず自己点検する）】',
    '・表紙（1枚目）で視線と意識を奪えているか。文字だけで寂しくないか。',
    '・見出しだけを追って「注意 → 感情 → 理解 → 行動」になっているか。',
    '・最後がGoalに直結する具体的な一手で終わっているか。',
    '・同じレイアウトTYPEが3枚以上続いていないか。クロップと縮尺に変化があるか。',
    '・写真/図解が高級誌の水準か。ストックフォト感・テンプレ感・凡庸さがないか。',
    '・世界観プリセットから逸脱していないか。配色・タイポのルールを守っているか。',
    '・1スライド1メッセージか。本文が長すぎないか。見出しのジャンプ率は十分か。',
    '・画像内に文字を焼き込んでいないか。Markdown記号を本文に入れていないか。',
  ].join('\n')
}

// 圧縮版の共通足場（要約モード用）。汎用ブロック群（Role/情報変換/AD/標準ルール/タイポ品位/Final Check）を
// 数行に畳む。Style OS＝神の部分は別途フルで載せるため、ここでは「最優先で下のStyle OSを守れ」と指す。
// 目的: NotebookLMの入力欄など文字数制限のある場所に収める。
function buildCompactCommonBlock(state: BuilderState): string {
  const goal = labelOf(GOALS, state.goal) ?? '視聴者の行動'
  return [
    '【共通ルール（圧縮版）／下のStyle OSを最優先で厳守】',
    '・あなたは人を動かすスライドを設計するADクラスの編集者。凡庸・テンプレ・説明過多を排す。これは内部指示でありスライドに出さない。資料（ソース）にある事実だけを使い、推測・一般論で水増しせず言い換えて再生成する。',
    'A. 抽出: 資料からGoalに直結する要点を抽出し統合する。',
    'B. 構成: 「注意 → 感情 → 理解 → 行動」に並べ、最後は必ず視聴者の次の一手で終える。',
    'C. 各スライド: 1スライド1メッセージ／本文は最大2行／見出しだけで流れが通る／同じレイアウトTYPEを3枚以上続けない／寄り引き・ジャンプ率でメリハリ。',
    'D. 品質: 写真/図解は高級誌水準（ストックフォト・テンプレ感禁止）。表紙は文字だけにしない。画像内に文字を焼き込まない。四隅の意味なき極小英語ラベルや内部用語を出さない。日本語/英語の字形を崩さない。Markdown記号（# * **）を本文に入れない。',
    `・最優先のGoal: 「${goal}」。全スライドをここへ収束させる。下のStyle OSの「描画/質感・Color・タイポ・TYPE A/B/C・表紙・禁止」を絶対の規範とする。`,
  ].join('\n')
}

/** BuilderState と StylePreset から最終プロンプト文字列を生成する。brand があれば最優先の判断基準として注入する。 */
export function compilePrompt(state: BuilderState, style: StylePreset, brand?: BrandProfile | null): string {
  // 要約モードは「箱に収まるコンパクト版」: Style OS（原典）はフル維持し、汎用の足場だけ圧縮する。
  const compact = state.outputDepth === 'summary'

  const blocks = compact
    ? [
        buildInputBlock(state, style),
        buildBrandBlock(brand),
        buildCompactCommonBlock(state),
        buildStoryArcBlock(state),
        `${DIVIDER}\n${buildStyleOSBlock(style, state)}\n${DIVIDER}`,
        buildOutputFormatBlock(state.outputDepth, state.detailSettings.slideCount),
        buildAdditionalRequestBlock(state),
        buildAdditionalProhibitionsBlock(state),
      ]
    : [
        buildInputBlock(state, style),
        buildBrandBlock(brand),
        buildInternalInstructionBlock(),
        buildRoleBlock(state),
        buildGoalBlock(state),
        buildInformationTransformBlock(),
        buildStoryArcBlock(state),
        buildMetaphorBlock(style),
        `${DIVIDER}\n${buildStyleOSBlock(style, state)}\n${DIVIDER}`,
        buildArtDirectionBlock(),
        buildSlideRulesBlock(),
        buildTypographyGuard(),
        buildOutputFormatBlock(state.outputDepth, state.detailSettings.slideCount),
        buildAdditionalRequestBlock(state),
        buildAdditionalProhibitionsBlock(state),
        buildFinalCheckBlock(),
      ]

  return blocks.filter(Boolean).join('\n\n')
}
