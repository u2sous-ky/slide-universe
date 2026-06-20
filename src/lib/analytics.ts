// GA4(gtag.js)へカスタムイベントを直接送る軽量ヘルパー。
// 測定ID G-7B4S8SJENY。「どの組み合わせが人気か」を集計する。
// gtag が無い環境（未ロード）では黙って何もしない。

import { findUseCase, labelOf, GOALS, IMPRESSIONS } from '../data/questions'
import { getPreset } from '../data/stylePresets'
import type { BuilderState } from './types'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Cookie同意: オプトイン型（GDPR）。明示的に 'accepted' のときだけ計測する。
// 未選択・拒否では送らない。
export const CONSENT_KEY = 'su.cookie-consent'
export function hasAnalyticsConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

export function track(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return
  if (!hasAnalyticsConsent()) return // 拒否時は送らない
  // GA4ネイティブのカスタムイベントとして送信（gtagはindex.htmlで定義済み）。
  // Consent Mode v2でも二重にガードされる。
  if (typeof window.gtag === 'function') window.gtag('event', event, params)
}

/** BuilderState から「どの組み合わせか」を表すGA4イベントパラメータを作る */
export function comboParams(state: BuilderState): Record<string, unknown> {
  const style = getPreset(state.styleId)
  return {
    style_id: state.styleId ?? '(none)',
    style_name: style?.name ?? '(none)',
    style_category: style?.category ?? '(none)',
    use_case: findUseCase(state.useCase)?.label ?? '(none)',
    goal: labelOf(GOALS, state.goal) ?? '(none)',
    impressions: state.impressions.map((id) => labelOf(IMPRESSIONS, id)).filter(Boolean).join(' / ') || '(none)',
    output_depth: state.outputDepth ?? '(none)',
    slide_count: state.detailSettings.slideCount,
  }
}
