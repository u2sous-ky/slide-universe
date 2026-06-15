// SLIDE UNIVERSE — バリデーション
// コーディングレギュレーション §5 準拠

import type { BuilderState } from './types'

export interface ReadinessItem {
  key: keyof BuilderState | 'audience'
  label: string
  done: boolean
}

/** 生成に必要な6項目の充足状況を返す */
export function getReadiness(state: BuilderState): ReadinessItem[] {
  return [
    { key: 'useCase', label: '用途', done: Boolean(state.useCase) },
    { key: 'audience', label: '対象者', done: state.audience.trim().length >= 5 },
    { key: 'goal', label: 'ゴール', done: Boolean(state.goal) },
    {
      key: 'impressions',
      label: '印象',
      done: state.impressions.length >= 1 && state.impressions.length <= 3,
    },
    { key: 'styleId', label: '世界観', done: Boolean(state.styleId) },
    { key: 'outputDepth', label: '出力の濃さ', done: Boolean(state.outputDepth) },
  ]
}

export function getRemainingCount(state: BuilderState): number {
  return getReadiness(state).filter((r) => !r.done).length
}

export function isReadyToGenerate(state: BuilderState): boolean {
  return getRemainingCount(state) === 0
}
