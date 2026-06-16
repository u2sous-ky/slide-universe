// ヘッダー（デザイン §9）— 最小構成。履歴/お気に入り/マイページは置かない。

import { Icon } from './Icon'

interface HeaderProps {
  onHelp: () => void
}

// 土星マーク — 宇宙＝Universe を表す。惑星本体＋傾いた環＋小さな星。
function SaturnMark() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="5.2"
        transform="rotate(-22 16 16)"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.9"
      />
      <circle cx="16" cy="16" r="7" fill="currentColor" />
      <circle cx="13.4" cy="13.4" r="2.1" fill="rgba(255,255,255,0.35)" />
      <circle cx="26" cy="7" r="1.1" fill="currentColor" />
      <circle cx="5.5" cy="24.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function Header({ onHelp }: HeaderProps) {
  return (
    <header className="su-header">
      <div className="su-header__brand">
        <span className="su-logo" aria-hidden="true">
          <SaturnMark />
        </span>
        <div className="su-header__titles">
          <h1 className="su-header__title">SLIDE UNIVERSE</h1>
        </div>
      </div>
      <button type="button" className="su-btn su-btn--ghost" onClick={onHelp}>
        <Icon name="help" size={18} />
        使い方
      </button>
    </header>
  )
}
