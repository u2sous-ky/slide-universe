// SLIDE UNIVERSE — 6設問の選択肢データ
// デザインレギュレーション §3 / 品質要件 §6 Story Arc 準拠

import type { OutputDepth } from '../lib/types'

export interface UseCaseOption {
  id: string
  label: string
  /** Roleブロックに展開する役割 */
  role: string
  /** Story Arcの補正（品質要件§6） */
  storyArc: string
}

export interface Option {
  id: string
  label: string
}

export interface OutputDepthOption {
  id: OutputDepth
  label: string
  hint: string
}

// Q1. 何の資料を作りますか？
export const USE_CASES: UseCaseOption[] = [
  {
    id: 'sales',
    label: '営業・提案資料',
    role: 'プレゼンテーションデザイナー兼セールスストーリーテラー',
    storyArc: '違和感 → 損失の自覚 → 解決構造 → 証拠 → 問い合わせ',
  },
  {
    id: 'service',
    label: 'サービス・商品紹介',
    role: 'プロダクトマーケター兼インフォグラフィックデザイナー',
    storyArc: '注意 → 課題の共感 → 価値の理解 → 使う未来 → 行動',
  },
  {
    id: 'seminar',
    label: 'セミナー・教育',
    role: '編集者兼インストラクショナルデザイナー',
    storyArc: '不安 → 誤解の解除 → 構造理解 → 小さな実践 → 申込',
  },
  {
    id: 'brand',
    label: 'ブランド・カルチャー資料',
    role: 'アートディレクター兼ブランドストーリーテラー',
    storyArc: '世界観 → 問題意識 → 独自視点 → 未来像 → 余韻',
  },
  {
    id: 'internal',
    label: '社内提案・報告',
    role: 'ビジネスエディター兼インフォグラフィックデザイナー',
    storyArc: '現状認識 → 論点 → 構造的分析 → 結論 → 意思決定',
  },
  {
    id: 'recruit',
    label: '採用・会社紹介',
    role: 'カルチャーエディター兼ストーリーテラー',
    storyArc: '共感 → 課題 → 私たちの視点 → 働く未来 → 応募',
  },
  {
    id: 'investor',
    label: '投資家・経営向け',
    role: 'コーポレートストラテジスト兼データストーリーテラー',
    storyArc: '市場の変化 → 機会 → 戦略 → 根拠データ → 合意',
  },
  {
    id: 'other',
    label: 'その他',
    role: 'プレゼンテーションデザイナー兼編集者',
    storyArc: '注意 → 共感 → 理解 → 行動',
  },
]

// Q3. 見た後、どう動いてほしいですか？
export const GOALS: Option[] = [
  { id: 'contact', label: '問い合わせ・相談したくなる' },
  { id: 'apply', label: '申し込み・購入したくなる' },
  { id: 'agree', label: '社内で合意・承認される' },
  { id: 'understand', label: '深く理解・納得する' },
  { id: 'remember', label: '興味を持ち、記憶に残る' },
  { id: 'act', label: '具体的な次の一歩を踏み出す' },
]

// Q4. どんな印象にしたいですか？（最大3つ）
export const IMPRESSIONS: Option[] = [
  { id: 'trust', label: '信頼感・誠実' },
  { id: 'innovative', label: '革新・先進' },
  { id: 'warm', label: '温かさ・親しみ' },
  { id: 'luxury', label: '高級感・洗練' },
  { id: 'bold', label: '大胆・インパクト' },
  { id: 'minimal', label: '静か・ミニマル' },
  { id: 'energetic', label: 'エネルギッシュ' },
  { id: 'intellectual', label: '知的・構造的' },
]

// Q6. 出力の濃さ
export const OUTPUT_DEPTHS: OutputDepthOption[] = [
  {
    id: 'summary',
    label: '要約プロンプト',
    hint: '足場を圧縮した短縮版。NotebookLMの入力欄など文字数制限のある場所に貼りたい時に（世界観の指定はフルで保持）。',
  },
  {
    id: 'standard',
    label: '標準',
    hint: '各スライドの見出し・要点・ビジュアル方針までバランスよく。',
  },
  {
    id: 'production',
    label: '制作指示レベル',
    hint: 'コピー・ビジュアル・レイアウト・配色まで詳細に指示する。',
  },
]

export function findUseCase(id: string | null): UseCaseOption | undefined {
  return USE_CASES.find((u) => u.id === id)
}
export function labelOf(list: Option[], id: string | null): string | undefined {
  return list.find((o) => o.id === id)?.label
}
