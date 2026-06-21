// 画像/PDFスライド → 編集可能PPTX 変換プロンプト（うちた式）の生成。
// SUは自前で変換しない（クライアント静的サイトのため）。代わりに「コード実行できるAI」
// （ChatGPTのコードインタプリタ / Claude）に貼るためのプロンプトを発行する。
// 核心3レバー: ①文字を画像化させない ②破線はprstDash ③AIが自分で見て直す。

export type ConvertAspect = '16:9' | '4:3' | 'original'

// 写真・複雑イラストの扱い: keep=実画像として残す / placeholder=差し替え枠 / drop=省く
export type PhotoMode = 'keep' | 'placeholder' | 'drop'

export interface ConvertOptions {
  /** 出力キャンバスの比率 */
  aspect: ConvertAspect
  /** 配色の上書き（任意）。「メイン：#1976D2」のような行を改行区切りで。空なら原画から抽出 */
  colorOverride: string
  /** 写真・複雑イラストの扱い */
  photoMode: PhotoMode
}

function aspectLine(aspect: ConvertAspect): string {
  if (aspect === '4:3')
    return '- キャンバスは4:3（10 × 7.5 inch）。原画の縦横比が違う場合のみ原画の比率を優先する。'
  if (aspect === 'original')
    return '- キャンバスは原画の縦横比に正確に合わせる（一般的な比率に丸めない）。'
  return '- キャンバスは16:9（13.333 × 7.5 inch）。原画の縦横比が違う場合のみ原画の比率を優先する。'
}

function colorPaletteSection(override: string): string {
  const base = `# Color Palette
- 配色は原画からHEXで抽出して再現する（近似で済ませない）。`
  const lines = override
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length === 0) {
    return `${base}
- 色を上書きしたい場合のみ、ここに「# RRGGBB」形式で指定する。`
  }
  return `${base}
- 以下の配色で上書きする（HEXそのまま適用・近似に丸めない）。白・グレー・黒はそのまま。
${lines.map((l) => `  - ${l}`).join('\n')}`
}

function photoLine(mode: PhotoMode): string {
  if (mode === 'keep') {
    return `
- 写真・複雑なイラストなど図形で再現できない要素は、原画から該当領域だけを切り出し、同じ位置・サイズに画像（Picture）として貼って残す。見た目を保つことを優先する。
  ※ テキストと図形はネイティブのまま（文字の画像化は禁止）。写真の領域だけを実画像にする。スライド全面・背景を丸ごと画像化するのは引き続き禁止。`
  }
  if (mode === 'placeholder') {
    return `
- 写真・複雑なイラストなど図形で再現できない要素は、削除せず「差し替え用プレースホルダ」として残す。
  原画と同じ位置・サイズに、淡いグレーの塗りなし矩形 ＋ 中央に「写真」等の小ラベルを置く。
  ユーザーが後から画像を挿入して差し替えられる状態にする（スライド全面のラスタ貼付は引き続き禁止）。`
  }
  // drop
  return `
- 写真・複雑なイラストなど図形で再現できない要素は、無理に再現せず省略してよい（全体のレイアウト・余白バランスは崩さない）。`
}

/** うちた式の変換プロンプト本体を組み立てて返す */
export function buildConvertPrompt(opts: ConvertOptions): string {
  return `# Input
変換したいスライドの画像またはPDFを、このメッセージに添付してください。
（添付したファイルが、そのまま変換の対象になります）

# Role
あなたは、画像/PDFのスライドを「見た目はほぼ同じ・中身は完全に編集可能」な .pptx に組み直すプロです。python-pptx でゼロから再構築してください。

# Task
Step 1. 原画を観察し、実在する要素だけを列挙する（テンプレ的な要素を勝手に足さない）。
Step 2. 各要素の位置・色・フォントサイズを実測し、原画ピクセル → スライドpt に等比正規化する。
Step 3. テキストは一字一句コピーする（全角/半角・括弧の種類・句点位置・記号まで一致させる）。
Step 4. テキストはネイティブTextBox、装飾はすべてネイティブShapeで組む。
Step 5. 出力後にレンダリングして原画と並べ、見る人にバレるレベルのズレだけ直す（最大3周）。

# Output Format
${aspectLine(opts.aspect)}
- 納品物は編集可能な .pptx を1ファイル。

# Design Specifications
- 全テキストが選択・編集できること（文字の画像化・アウトライン化・SmartArt化は禁止）。
- 全シェイプが1つずつ選択・移動・リサイズできること。
- SVGの埋め込み禁止。スライド全面へのラスタ画像（背景含む）貼付も禁止。${photoLine(opts.photoMode)}
- 【最重要】点線・破線の枠は「塗りなしシェイプ ＋ 破線アウトライン」で表現する。
  破線は prstDash を dash / sysDash / sysDot から指定し、線幅は1〜2pt。
  ※点や短い線を多数並べて破線を"自作"するのは禁止（等間隔の崩れ・角の潰れの原因になる）。
- 日本語フォントは ea（eastAsia）と latin の両方に同じフェイスを指定する
  （片方だけだと日本語と英数字の境目に半角スペースが入って見える）。
- テキストボックスは右マージンを30〜100pt広めに取り、word_wrap=false にする（末尾の句点切れ防止）。

${colorPaletteSection(opts.colorOverride)}

# Rules
- 原画にない要素を足さない／原画にある要素を落とさない。
- Boldは保守的に当てる（24pt以上の見出し・英語ラベル・アクセント色の小ラベルのみ）。本文中の単語を勝手に太字にしない。
- 破線のチェックは必ずPowerPoint実体で確認する。レンダリングしたPNG画像だけを見て「破線が崩れた」と判定しない（PNG変換側の描画差で崩れて見えることがあるため）。
- 完成基準は「原画と並べて、見る人にバレる破綻がないこと」。ピクセル単位の追い込みはしない。`
}
