// 保存セッティングのサマリー表示（サムネ＋設定項目）。保存ポップアップ／ドロワーで共用。
import { findUseCase, labelOf, GOALS, IMPRESSIONS } from '../data/questions'
import { getPreset, thumbBg } from '../data/stylePresets'
import type { BuilderState } from '../lib/types'

export function SettingSummary({ state, compact = false }: { state: BuilderState; compact?: boolean }) {
  const useCase = findUseCase(state.useCase)
  const style = getPreset(state.styleId)
  return (
    <div className={`su-setsum${compact ? ' su-setsum--compact' : ''}`}>
      <span
        className="su-setsum__thumb"
        style={{ background: style ? thumbBg(style) : 'rgba(255,255,255,0.08)' }}
        aria-hidden="true"
      />
      <dl className="su-setsum__list">
        <div><dt>世界観</dt><dd>{style?.name ?? '—'}</dd></div>
        <div><dt>用途</dt><dd>{useCase?.label ?? '—'}</dd></div>
        {!compact && <div><dt>対象</dt><dd>{state.audience.trim() || '—'}</dd></div>}
        <div><dt>ゴール</dt><dd>{labelOf(GOALS, state.goal) ?? '—'}</dd></div>
        <div>
          <dt>印象</dt>
          <dd>{state.impressions.map((id) => labelOf(IMPRESSIONS, id)).join(' / ') || '—'}</dd>
        </div>
      </dl>
    </div>
  )
}
