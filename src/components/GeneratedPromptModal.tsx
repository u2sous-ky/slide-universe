// 生成プロンプト確認モーダル（デザイン §8 / コーディング §8）
// 役割は「見る」「コピーする」だけ。再生成・保存・履歴・共有は置かない。

import { useState } from 'react'
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'

interface GeneratedPromptModalProps {
  open: boolean
  prompt: string
  onClose: () => void
}

export function GeneratedPromptModal({ open, prompt, onClose }: GeneratedPromptModalProps) {
  const ref = useModalA11y(open, onClose)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
    } catch {
      // フォールバック
      const ta = document.createElement('textarea')
      ta.value = prompt
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!open) return null

  return (
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="su-modal su-modal--prompt"
        role="dialog"
        aria-modal="true"
        aria-label="生成されたプロンプト"
        ref={ref}
      >
        <header className="su-modal__head">
          <h2 className="su-modal__title">生成されたプロンプト</h2>
          <p className="su-modal__sub">
            このプロンプトをコピーして、NotebookLMに貼り付けてください。
          </p>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>

        <pre className="su-prompt-text" tabIndex={0}>{prompt}</pre>

        <div className="su-modal__footer">
          <button type="button" className="su-btn su-btn--ghost" onClick={onClose}>
            閉じる
          </button>
          <button type="button" className="su-btn su-btn--primary" onClick={copy}>
            <Icon name={copied ? 'check' : 'content_copy'} size={18} />
            {copied ? 'コピーしました' : 'コピーする'}
          </button>
        </div>
      </div>
    </div>
  )
}
