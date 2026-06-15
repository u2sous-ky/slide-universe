// 微調整パラメータの共通ロジック。
// 全プリセット共通の「文字 ⇄ ビジュアル」バランス軸 + 各プリセット固有の微調整。

import type { StylePreset, TuningParam } from './types'

export type TuningValues = Record<string, string | number>

// 全スタイル共通の構成バランス軸（ユーザーが毎回触りたい主軸）
export const BALANCE_PARAM: TuningParam = {
  key: 'balance',
  label: '文字 ⇄ ビジュアル',
  type: 'slider',
  defaultValue: 50,
  min: 0,
  max: 100,
  leftLabel: '文字主役',
  rightLabel: 'ビジュアル主役',
}

/** プリセットの傾向からバランスの初期値を決める */
export function defaultBalance(style: StylePreset): number {
  const v = style.tendencies.visualPriority
  return v === 'high' ? 70 : v === 'medium' ? 50 : 35
}

/** モーダルで表示する微調整パラメータ一覧（バランスを先頭に） */
export function tuningParamsFor(style: StylePreset): TuningParam[] {
  return [BALANCE_PARAM, ...style.tuning]
}

/** プリセットの初期微調整値（バランス＋各パラメータのデフォルト） */
export function initTuning(style: StylePreset): TuningValues {
  const out: TuningValues = { balance: defaultBalance(style) }
  for (const t of style.tuning) out[t.key] = t.defaultValue
  return out
}

/** 値を取得（未設定ならデフォルト） */
export function tuningValue(
  values: TuningValues | undefined,
  param: TuningParam,
): string | number {
  return values?.[param.key] ?? param.defaultValue
}
