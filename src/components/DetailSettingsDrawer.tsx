// 詳細設定ドロワー（デザイン §6 / コーディング §9）
// 右からスライドイン。出力先・世界観は扱わない。枚数・追加ルールのみ。

import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'
import { STANDARD_QUALITY_RULES } from '../lib/promptCompiler'
import {
  DEFAULT_DETAIL_SETTINGS,
  type DetailSettings,
  type SlideCount,
} from '../lib/types'

interface DetailSettingsDrawerProps {
  open: boolean
  value: DetailSettings
  onApply: (v: DetailSettings) => void
  onClose: () => void
}

const SLIDE_COUNTS: { id: SlideCount; label: string }[] = [
  { id: 'auto', label: '自動' },
  { id: '8', label: '8枚' },
  { id: '12', label: '12枚' },
  { id: '16', label: '16枚' },
]

export function DetailSettingsDrawer({ open, value, onApply, onClose }: DetailSettingsDrawerProps) {
  const ref = useModalA11y(open, onClose)
  const [draft, setDraft] = useState<DetailSettings>(value)

  // 開くたびに現在値で初期化
  useEffect(() => {
    if (open) setDraft(value)
  }, [open, value])

  if (!open) return null

  return (
    <div className="su-overlay su-overlay--right" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside
        className="su-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="詳細設定（枚数・追加ルール）"
        ref={ref}
      >
        <header className="su-drawer__head">
          <h2 className="su-drawer__title">詳細設定</h2>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>
        <p className="su-drawer__sub">枚数・追加ルールを調整します。世界観や配色はここでは変更しません。</p>

        <div className="su-drawer__scroll">
          <section className="su-field">
            <h3 className="su-field__label">スライド枚数</h3>
            <div className="su-segmented">
              {SLIDE_COUNTS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`su-segmented__item${draft.slideCount === s.id ? ' is-on' : ''}`}
                  aria-pressed={draft.slideCount === s.id}
                  onClick={() => setDraft({ ...draft, slideCount: s.id })}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </section>

          <section className="su-field">
            <h3 className="su-field__label">
              追加要望 <span className="su-field__count">{draft.additionalRequest.length}/300</span>
            </h3>
            <textarea
              className="su-textarea"
              rows={3}
              maxLength={300}
              placeholder="例: 冒頭に課題提起のスライドを必ず入れる / 数値は具体的に示す"
              value={draft.additionalRequest}
              onChange={(e) => setDraft({ ...draft, additionalRequest: e.target.value })}
            />
          </section>

          <section className="su-field">
            <h3 className="su-field__label">
              標準品質ルール <span className="su-lock"><Icon name="lock" size={14} />適用中</span>
            </h3>
            <ul className="su-rules su-rules--locked">
              {STANDARD_QUALITY_RULES.map((r) => (
                <li key={r}><Icon name="check" size={16} />{r}</li>
              ))}
            </ul>
          </section>

          <section className="su-field">
            <h3 className="su-field__label">
              追加の禁止事項 <span className="su-field__count">{draft.additionalProhibitions.length}/200</span>
            </h3>
            <textarea
              className="su-textarea"
              rows={3}
              maxLength={200}
              placeholder="例: 競合名を出さない / 特定の色を使わない"
              value={draft.additionalProhibitions}
              onChange={(e) => setDraft({ ...draft, additionalProhibitions: e.target.value })}
            />
          </section>
        </div>

        <div className="su-drawer__footer">
          <button
            type="button"
            className="su-btn su-btn--ghost"
            onClick={() => setDraft(DEFAULT_DETAIL_SETTINGS)}
          >
            初期値に戻す
          </button>
          <button type="button" className="su-btn su-btn--primary" onClick={() => onApply(draft)}>
            適用する
          </button>
        </div>
      </aside>
    </div>
  )
}
