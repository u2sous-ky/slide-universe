// SLIDE UNIVERSE — Prompt Compiler
// 実装上の重要方針: UIにプロンプト本文を直書きしない。
// userInput + stylePreset + detailSettings + corePromptBlocks を合成して最終プロンプトを返す。
// ブロック順序は 品質要件 §1-10 / コーディングレギュレーション §12 準拠。

import type { BuilderState, StylePreset, OutputDepth } from './types'
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

function buildInternalInstructionBlock(): string {
  return [
    '【内部指示】',
    '・ここから下はあなたへの指示であり、スライドには一切表示しない。',
    '・この文章・見出し・例文をそのままスライド本文に使わない。',
    '・画像内に文字を描き込まない。',
    '・NotebookLM内の資料内容から要点を抽出し、言い換えて再生成する。',
  ].join('\n')
}

function buildRoleBlock(state: BuilderState): string {
  const role = findUseCase(state.useCase)?.role ?? 'プレゼンテーションデザイナー兼編集者'
  return ['【Role】', `あなたは ${role}。`, '選択された用途と世界観に合った視点で設計する。'].join('\n')
}

function buildGoalBlock(state: BuilderState): string {
  const goal = labelOf(GOALS, state.goal) ?? '視聴者の行動'
  return [
    '【Goal】',
    `・最優先はユーザーが入力したGoalの達成: 「${goal}」`,
    '・きれいなスライドではなく、視聴者がGoalに向かって動きたくなるスライドを作る。',
  ].join('\n')
}

function buildInformationTransformBlock(): string {
  return [
    '【情報変換ロジック】',
    '・資料からGoalに直結する要点を12〜18個抽出する（事実 / 主張 / 根拠 / 具体例 / 手順）。',
    '・重複する話は統合する。曖昧な情報は条件付きで表現する。',
    '・「注意 → 感情 → 理解 → 行動」の順に並べ替える。',
    '・最後は必ず視聴者の次の一手で終える（具体・短い）。',
  ].join('\n')
}

function buildStoryArcBlock(state: BuilderState): string {
  const arc = findUseCase(state.useCase)?.storyArc ?? '注意 → 共感 → 理解 → 行動'
  return [
    '【Story Arc】',
    `・全体の流れ: ${arc}`,
    '・同じレイアウトTYPEを3枚以上続けない。強弱（リズム）を作る。',
    '・見出しだけを追っても話が通るように設計する。',
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
      lines.push(`・ブランドカラーの基調は ${val} を起点にする（プリセットの配色ルールは維持する）。`)
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
      '  - Main Headline（日本語の言い切り）',
      '  - Optional English Tag（1〜4語、任意）',
      '  - Lead Text（最大2行）',
      '  - Visual Direction（具体的な被写体・構図・コールアウト）',
      '  - Layout Direction（グリッド・余白・配置）',
      '  - Color / Typography Direction（配色とジャンプ率）',
      '  - Action Hook（次の一手が浮かぶ一言）',
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
    '【Final Check（出力前の自己点検）】',
    '・Goalに接続しているか。',
    '・1スライド1メッセージか。',
    '・見出しだけで流れが通るか。',
    '・世界観プリセットから逸脱していないか。',
    '・文字量が多すぎないか。',
    '・画像内文字を要求していないか。',
    '・最後に次の一手があるか。',
  ].join('\n')
}

/** BuilderState と StylePreset から最終プロンプト文字列を生成する */
export function compilePrompt(state: BuilderState, style: StylePreset): string {
  const blocks = [
    buildInputBlock(state, style),
    buildInternalInstructionBlock(),
    buildRoleBlock(state),
    buildGoalBlock(state),
    buildInformationTransformBlock(),
    buildStoryArcBlock(state),
    `${DIVIDER}\n${buildStyleOSBlock(style, state)}\n${DIVIDER}`,
    buildSlideRulesBlock(),
    buildTypographyGuard(),
    buildOutputFormatBlock(state.outputDepth, state.detailSettings.slideCount),
    buildAdditionalRequestBlock(state),
    buildAdditionalProhibitionsBlock(state),
    buildFinalCheckBlock(),
  ].filter(Boolean)

  return blocks.join('\n\n')
}
