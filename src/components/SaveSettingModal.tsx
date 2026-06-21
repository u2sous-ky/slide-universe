// 設定をお気に入り保存するポップアップ（命名＋設定サマリー）。
// App側で open のときだけマウントする想定（名称stateを毎回リセットするため）。
import { useState } from 'react'
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'
import { SettingSummary } from './SettingSummary'
import type { BuilderState } from '../lib/types'

interface SaveSettingModalProps {
  state: BuilderState
  onSave: (name: string) => void
  onClose: () => void
}

export function SaveSettingModal({ state, onSave, onClose }: SaveSettingModalProps) {
  const ref = useModalA11y(true, onClose)
  const [name, setName] = useState('')

  const save = () => onSave(name)

  return (
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="su-modal su-modal--save"
        role="dialog"
        aria-modal="true"
        aria-label="設定をお気に入り保存"
        ref={ref}
      >
        <header className="su-modal__head">
          <h2 className="su-modal__title">この設定をお気に入り保存</h2>
          <p className="su-modal__sub">名前を付けて保存すると、あとから呼び出して再編集できます。</p>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>

        <div className="su-modal__body su-save__body">
          <label className="su-field">
            <span className="su-field__label">お気に入りの名称</span>
            <input
              type="text"
              className="su-input"
              placeholder="例: 営業資料・モノクロコラージュ"
              value={name}
              autoFocus
              maxLength={60}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  save()
                }
              }}
            />
          </label>
          <div className="su-save__summary">
            <span className="su-field__label">保存される内容</span>
            <SettingSummary state={state} />
          </div>
        </div>

        <div className="su-modal__footer">
          <button type="button" className="su-btn su-btn--ghost" onClick={onClose}>
            キャンセル
          </button>
          <button type="button" className="su-btn su-btn--primary" onClick={save}>
            <Icon name="star" size={18} filled />
            保存する
          </button>
        </div>
      </div>
    </div>
  )
}
