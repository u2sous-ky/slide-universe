// 使い方モーダル（ヘッダーの「使い方」から開く軽量説明）

import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'

interface HelpModalProps {
  open: boolean
  onClose: () => void
}

const STEPS = [
  { icon: 'description', text: '6つの設問に答えて、目的・対象・印象を伝えます。' },
  { icon: 'palette', text: '世界観ライブラリから、資料に合うビジュアルスタイルを1つ選びます。' },
  { icon: 'tune', text: '必要なら詳細設定で枚数や追加ルールを調整します。' },
  { icon: 'bolt', text: 'プロンプトを生成し、コピーしてNotebookLMに貼り付けます。' },
]

export function HelpModal({ open, onClose }: HelpModalProps) {
  const ref = useModalA11y(open, onClose)
  if (!open) return null
  return (
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="su-modal su-modal--help" role="dialog" aria-modal="true" aria-label="使い方" ref={ref}>
        <header className="su-modal__head">
          <h2 className="su-modal__title">使い方</h2>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>
        <ol className="su-help">
          {STEPS.map((s, i) => (
            <li key={i} className="su-help__step">
              <span className="su-help__num">{i + 1}</span>
              <Icon name={s.icon} size={20} />
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
        <div className="su-modal__footer">
          <button type="button" className="su-btn su-btn--primary" onClick={onClose}>
            はじめる
          </button>
        </div>
      </div>
    </div>
  )
}
