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
