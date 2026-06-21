// SLIDE UNIVERSE — 型定義
// コーディングレギュレーション §4, §11 準拠

export type StyleCategory =
  | 'business'
  | 'structure'
  | 'editorial'
  | 'collage'
  | 'pop'
  | 'immersive'
  | 'soft'

export type Tendency = 'low' | 'medium' | 'high'

export type OutputDepth = 'summary' | 'standard' | 'production'

export type SlideCount = 'auto' | '8' | '12' | '16'

export interface TuningParam {
  key: string
  label: string
  type: 'slider' | 'select' | 'color'
  defaultValue: string | number
  options?: string[]
  min?: number
  max?: number
  leftLabel?: string
  rightLabel?: string
}

export interface StylePreset {
  id: string
  name: string
  nameEn: string
  category: StyleCategory
  description: string
  /** サムネイル未設定時に使うグラデーション（CSS background）。後で画像に差し替え可能 */
  thumbnailClass: string
  tags: string[]
  impressions: string[]
  colorTones: string[]
  suitableFor: string[]
  unsuitableFor: string[]
  tendencies: {
    reliability: Tendency
    visualPriority: Tendency
    dataCompatibility: Tendency
    textAmount: Tendency
  }
  tuning: TuningParam[]
  brandColor: string
  /** 世界観固有の Style OS ブロック（promptCompilerが共通ブロックと合成） */
  promptBlock: string
}

export interface DetailSettings {
  slideCount: SlideCount
  additionalRequest: string
  additionalProhibitions: string
}

export interface BuilderState {
  useCase: string | null
  audience: string
  goal: string | null
  impressions: string[]
  styleId: string | null
  /** 選択中スタイルの微調整値（balance + 各プリセット固有パラメータ） */
  tuning: Record<string, string | number>
  outputDepth: OutputDepth | null
  detailSettings: DetailSettings
}

/** お気に入り保存した「自分のセッティング」1件（localStorage 永続化用） */
export interface SavedSetting {
  id: string
  name: string
  createdAt: number
  /** 再編集できるよう、入力状態をまるごとスナップショットする */
  state: BuilderState
}

export const DEFAULT_DETAIL_SETTINGS: DetailSettings = {
  slideCount: 'auto',
  additionalRequest: '',
  additionalProhibitions: '',
}

export const INITIAL_BUILDER_STATE: BuilderState = {
  useCase: null,
  audience: '',
  goal: null,
  impressions: [],
  styleId: null,
  tuning: {},
  outputDepth: null,
  detailSettings: DEFAULT_DETAIL_SETTINGS,
}

/**
 * ブランド前提（brand.md）。AIに一般論を書かせないための「判断基準」を1枚化したもの。
 * 全生成に共通で効く永続レイヤー（localStorage）。見た目方針は世界観プリセットが担うため、
 * ここは「言葉と立場」のレイヤーに絞る。空欄はプロンプトに出さない。
 */
export interface BrandProfile {
  audience: string // 誰に届けるか
  promise: string // 約束する変化
  belief: string // 信じていること
  useWords: string // 使う言葉
  avoidWords: string // 使わない言葉（特に効く）
  keepImpression: string // 残したい印象
  avoidImpression: string // 避けたい印象
  notDo: string // やらないこと（特に効く）
}

export const BRAND_STORAGE_KEY = 'su.brand'

export const EMPTY_BRAND: BrandProfile = {
  audience: '',
  promise: '',
  belief: '',
  useWords: '',
  avoidWords: '',
  keepImpression: '',
  avoidImpression: '',
  notDo: '',
}

/** どれか1項目でも記入があれば true（空のブランドはプロンプトへ注入しない） */
export function hasBrandContent(b: BrandProfile | null | undefined): boolean {
  return !!b && Object.values(b).some((v) => typeof v === 'string' && v.trim() !== '')
}
