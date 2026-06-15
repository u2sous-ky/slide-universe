// トップページ右カラム — 設計プレビュー（デザイン §3 / コーディング §6,7）
// 入力状態に応じて段階的にアクティブになる。

import { Fragment } from 'react'
import { Icon } from './Icon'
import type { BuilderApi } from '../hooks/useBuilderState'
import { findUseCase, labelOf, GOALS, IMPRESSIONS, OUTPUT_DEPTHS } from '../data/questions'
import { getPreset } from '../data/stylePresets'
import { getReadiness, getRemainingCount, isReadyToGenerate } from '../lib/validation'
import { STANDARD_QUALITY_RULES } from '../lib/promptCompiler'

interface PreviewPanelProps {
  api: BuilderApi
  onGenerate: () => void
  onOpenDetail: () => void
}

interface CardProps {
  icon: string
  title: string
  active: boolean
  children: React.ReactNode
}

function PreviewCard({ icon, title, active, children }: CardProps) {
  return (
    <section className={`su-pcard${active ? ' is-active' : ''}`}>
      <div className="su-pcard__head">
        <Icon name={icon} size={18} />
        <h3 className="su-pcard__title">{title}</h3>
        {!active && <span className="su-pcard__badge">未設定</span>}
      </div>
      <div className="su-pcard__body">{children}</div>
    </section>
  )
}

export function PreviewPanel({ api, onGenerate, onOpenDetail }: PreviewPanelProps) {
  const { state } = api
  const useCase = findUseCase(state.useCase)
  const style = getPreset(state.styleId)
  const depth = OUTPUT_DEPTHS.find((d) => d.id === state.outputDepth)

  const summaryActive =
    Boolean(state.useCase) ||
    state.audience.trim().length > 0 ||
    Boolean(state.goal) ||
    state.impressions.length > 0
  const arcActive = Boolean(state.useCase)
  const styleActive = Boolean(style)
  const rulesActive = Boolean(style) && Boolean(state.outputDepth)
  const ready = isReadyToGenerate(state)
  const remaining = getRemainingCount(state)

  return (
    <div className="su-preview">
      <div className="su-preview__head">
        <h2 className="su-preview__heading">あなたの目的にあわせたスライド設計プレビュー</h2>
      </div>

      <div className="su-preview__scroll">
        <PreviewCard icon="summarize" title="入力条件のまとめ" active={summaryActive}>
          {summaryActive ? (
            <dl className="su-summary">
              <div><dt>用途</dt><dd>{useCase?.label ?? '—'}</dd></div>
              <div><dt>対象者</dt><dd>{state.audience.trim() || '—'}</dd></div>
              <div><dt>ゴール</dt><dd>{labelOf(GOALS, state.goal) ?? '—'}</dd></div>
              <div>
                <dt>印象</dt>
                <dd>{state.impressions.map((id) => labelOf(IMPRESSIONS, id)).join(' / ') || '—'}</dd>
              </div>
            </dl>
          ) : (
            <p className="su-muted">設問に答えると、ここに条件がまとまります。</p>
          )}
        </PreviewCard>

        <PreviewCard icon="route" title="ストーリーの流れ" active={arcActive}>
          {useCase ? (
            <ol className="su-arc">
              {useCase.storyArc.split('→').map((step, i) => (
                <Fragment key={i}>
                  {i > 0 && (
                    <li className="su-arc__sep" aria-hidden="true">
                      <Icon name="arrow_forward" size={14} />
                    </li>
                  )}
                  <li className="su-arc__step">
                    <span className="su-arc__num">{i + 1}</span>
                    <span className="su-arc__label">{step.trim()}</span>
                  </li>
                </Fragment>
              ))}
            </ol>
          ) : (
            <p className="su-muted">用途を選ぶと、視聴者を動かす流れが決まります。</p>
          )}
        </PreviewCard>

        <PreviewCard icon="palette" title="選択中の世界観" active={styleActive}>
          {style ? (
            <div className="su-pstyle">
              <span
                className="su-pstyle__thumb"
                style={{ background: style.thumbnailClass }}
                aria-hidden="true"
              />
              <div>
                <div className="su-pstyle__name">{style.name}</div>
                <div className="su-pstyle__tags">
                  {style.impressions.slice(0, 3).map((t) => (
                    <span key={t} className="su-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="su-muted">世界観を選ぶと、ここに反映されます。</p>
          )}
        </PreviewCard>

        <PreviewCard icon="verified" title="自動で適用されるルール" active={rulesActive}>
          {rulesActive ? (
            <>
              <p className="su-rules__lead">
                出力の濃さ「{depth?.label}」で、以下の品質ルールを自動適用します。
              </p>
              <ul className="su-rules">
                {STANDARD_QUALITY_RULES.map((r) => (
                  <li key={r}><Icon name="check" size={16} />{r}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="su-muted">世界観と出力の濃さを選ぶと、品質ルールが確定します。</p>
          )}
          <button type="button" className="su-rules-detail" onClick={onOpenDetail}>
            <Icon name="settings" size={16} />
            詳細設定（枚数・追加ルール）
            <Icon name="chevron_right" size={16} />
          </button>
        </PreviewCard>

        <PreviewCard icon="checklist" title="生成準備" active={ready}>
          <ul className="su-readiness">
            {getReadiness(state).map((r) => (
              <li key={r.label} className={r.done ? 'is-done' : ''}>
                <Icon name={r.done ? 'check_circle' : 'radio_button_unchecked'} size={16} filled={r.done} />
                {r.label}
              </li>
            ))}
          </ul>
        </PreviewCard>
      </div>

      <div className="su-preview__footer">
        <button
          type="button"
          className="su-btn su-btn--primary su-btn--block"
          disabled={!ready}
          onClick={onGenerate}
        >
          <Icon name="bolt" size={20} filled />
          {ready ? 'プロンプトを生成する' : `あと${remaining}項目で生成できます`}
        </button>
        {!ready && (
          <p className="su-preview__note">6つの設問をすべて入力すると生成できます。</p>
        )}
      </div>
    </div>
  )
}
