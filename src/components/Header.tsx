// ヘッダー（デザイン §9）— 最小構成。履歴/お気に入り/マイページは置かない。

import { Icon } from './Icon'

interface HeaderProps {
  onHelp: () => void
}

// 土星マーク — 宇宙＝Universe。青→紫→マゼンタのグラデ惑星＋傾いた環（ベクター）。
function SaturnMark() {
  return (
    <svg viewBox="0 0 44 44" width="34" height="34" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="suSaturn" x1="7" y1="9" x2="37" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6aa6ff" />
          <stop offset="0.5" stopColor="#a877f0" />
          <stop offset="1" stopColor="#f078c8" />
        </linearGradient>
      </defs>
      {/* 環 */}
      <ellipse
        cx="22"
        cy="22"
        rx="20"
        ry="6.4"
        transform="rotate(-24 22 22)"
        stroke="url(#suSaturn)"
        strokeWidth="2.3"
        opacity="0.95"
      />
      {/* 惑星本体 */}
      <circle cx="22" cy="22" r="10.5" fill="url(#suSaturn)" />
      {/* ハイライト */}
      <ellipse cx="18" cy="18" rx="3.4" ry="2.4" transform="rotate(-20 18 18)" fill="rgba(255,255,255,0.45)" />
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
