// トップページ左カラム — 6つの設問（デザイン §3）

import { useState } from 'react'
import { Icon } from './Icon'
import type { BuilderApi } from '../hooks/useBuilderState'
import { USE_CASES, GOALS, IMPRESSIONS, OUTPUT_DEPTHS } from '../data/questions'
import { getPreset, thumbBg } from '../data/stylePresets'

interface QuestionPanelProps {
  api: BuilderApi
  onOpenLibrary: () => void
}

// 設問見出しの「？」→ ポップアップ説明
function HelpPopover({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <span className="su-help-pop">
      <button
        type="button"
        className="su-help-btn"
        aria-label={`${title}の説明`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="help" size={15} />
      </button>
      {open && (
        <>
          <span className="su-help-pop__catch" onClick={() => setOpen(false)} aria-hidden="true" />
          <span className="su-help-pop__card" role="dialog" aria-label={title}>
            <span className="su-help-pop__title">{title}</span>
            <span className="su-help-pop__body">{children}</span>
          </span>
        </>
      )}
    </span>
  )
}

interface SectionProps {
  icon: string
  step: number
  title: string
  hint?: string
  help?: React.ReactNode
  children: React.ReactNode
}

function Section({ icon, step, title, hint, help, children }: SectionProps) {
  return (
    <section className="su-q">
      <div className="su-q__head">
        <span className="su-q__icon" aria-hidden="true">
          <Icon name={icon} size={18} />
        </span>
        <span className="su-q__step">Q{step}</span>
        <h2 className="su-q__title">{title}</h2>
        {hint && <span className="su-q__hint">{hint}</span>}
        {help && <HelpPopover title={title}>{help}</HelpPopover>}
      </div>
      <div className="su-q__body">{children}</div>
    </section>
  )
}

export function QuestionPanel({ api, onOpenLibrary }: QuestionPanelProps) {
  const { state } = api
  const selectedStyle = getPreset(state.styleId)

  return (
    <div className="su-questions">
      <Section icon="description" step={1} title="どんな資料を作りますか？">
        <div className="su-chips">
          {USE_CASES.map((u) => (
            <button
              key={u.id}
              type="button"
              className={`su-chip${state.useCase === u.id ? ' is-selected' : ''}`}
              aria-pressed={state.useCase === u.id}
              onClick={() => api.setUseCase(u.id)}
            >
              {u.label}
            </button>
          ))}
        </div>
      </Section>

      <Section
        icon="groups"
        step={2}
        title="誰に見せますか？"
        hint="5文字以上"
      >
        <input
          type="text"
          className="su-input"
          value={state.audience}
          placeholder="例: 都市部の20〜30代ビジネス層 / 企画職 / マーケ担当"
          aria-label="対象者"
          onChange={(e) => api.setAudience(e.target.value)}
        />
      </Section>

      <Section
        icon="flag"
        step={3}
        title="プレゼンのゴールは？"
        help={
          <>
            このプレゼンを見た人に<strong>最終的に取ってほしい行動</strong>を選びます。すべてのスライドはこのゴールに向けて設計されます。
            <br />
            <br />
            例：問い合わせ・申し込み・社内の合意・深い納得・記憶に残す・次の一歩 など。
          </>
        }
      >
        <div className="su-chips">
          {GOALS.map((g) => (
            <button
              key={g.id}
              type="button"
              className={`su-chip${state.goal === g.id ? ' is-selected' : ''}`}
              aria-pressed={state.goal === g.id}
              onClick={() => api.setGoal(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>
      </Section>

      <Section
        icon="auto_awesome"
        step={4}
        title="どんな印象にしたいですか？"
        hint={`最大3つ・${state.impressions.length}/3`}
      >
        <div className="su-chips">
          {IMPRESSIONS.map((im) => {
            const selected = state.impressions.includes(im.id)
            const disabled = !selected && state.impressions.length >= 3
            return (
              <button
                key={im.id}
                type="button"
                className={`su-chip${selected ? ' is-selected' : ''}`}
                aria-pressed={selected}
                disabled={disabled}
                onClick={() => api.toggleImpression(im.id)}
              >
                {im.label}
              </button>
            )
          })}
        </div>
      </Section>

      <Section icon="palette" step={5} title="世界観（ビジュアルスタイル）を選びましょう">
        {selectedStyle ? (
          <div className="su-style-selected">
            <span
              className="su-style-selected__thumb"
              style={{ background: thumbBg(selectedStyle) }}
              aria-hidden="true"
            />
            <div className="su-style-selected__meta">
              <span className="su-style-selected__name">{selectedStyle.name}</span>
              <span className="su-style-selected__desc">{selectedStyle.description}</span>
            </div>
            <button type="button" className="su-btn su-btn--ghost su-btn--sm" onClick={onOpenLibrary}>
              変更
            </button>
          </div>
        ) : (
          <button type="button" className="su-style-empty" onClick={onOpenLibrary}>
            <Icon name="palette" size={20} />
            すべての世界観を見る
          </button>
        )}
      </Section>

      <Section
        icon="tune"
        step={6}
        title="どのくらい詳しく作りますか？"
        help={
          <>
            生成するプロンプトの<strong>詳しさ</strong>を選びます。濃いほどプロンプトは長く、スライドへの指定が細かくなります。
            <br />
            <br />
            <strong>要約プロンプト</strong>：構成と要点だけ。まず全体像をつかみたい時。
            <br />
            <strong>標準</strong>：各スライドの見出し・要点・ビジュアル方針までバランスよく。
            <br />
            <strong>制作指示レベル</strong>：コピー・ビジュアル・レイアウト・配色まで1枚ずつ詳細に指示。作り込みたい時。
          </>
        }
      >
        <div className="su-depths">
          {OUTPUT_DEPTHS.map((d) => (
            <button
              key={d.id}
              type="button"
              className={`su-depth${state.outputDepth === d.id ? ' is-selected' : ''}`}
              aria-pressed={state.outputDepth === d.id}
              onClick={() => api.setOutputDepth(d.id)}
            >
              <span className="su-depth__label">{d.label}</span>
              <span className="su-depth__hint">{d.hint}</span>
            </button>
          ))}
        </div>
      </Section>
    </div>
  )
}
