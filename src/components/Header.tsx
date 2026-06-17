// ヘッダー（デザイン §9）— 最小構成。履歴/お気に入り/マイページは置かない。

import { Icon } from './Icon'

interface HeaderProps {
  onHelp: () => void
}

// 土星マーク — 公式ロゴ準拠。青→紫→ピンクの球体グラデ＋球の前を横切る白いリング（ベクター・完全透過）。
function SaturnMark() {
  return (
    <svg viewBox="0 0 44 44" width="48" height="48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="suSphere" x1="11" y1="9" x2="33" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7db6ff" />
          <stop offset="0.52" stopColor="#a878f0" />
          <stop offset="1" stopColor="#f06ac0" />
        </linearGradient>
        {/* リングの前側（球の手前を横切る下半分）だけを見せるマスク */}
        <mask id="suRingFront">
          <rect x="0" y="22" width="44" height="22" fill="#fff" />
        </mask>
      </defs>
      {/* リング後側（球の背後・控えめ） */}
      <ellipse cx="22" cy="22" rx="21" ry="6.6" transform="rotate(-20 22 22)" stroke="#b9c6ff" strokeWidth="1.7" opacity="0.5" />
      {/* 球体 */}
      <circle cx="22" cy="22" r="11" fill="url(#suSphere)" />
      {/* ハイライト */}
      <ellipse cx="17" cy="16" rx="3.6" ry="2.4" transform="rotate(-20 17 16)" fill="#ffffff" opacity="0.4" />
      {/* リング前側（球の手前を横切る・明るい） */}
      <g mask="url(#suRingFront)">
        <ellipse cx="22" cy="22" rx="21" ry="6.6" transform="rotate(-20 22 22)" stroke="#eef2ff" strokeWidth="2" />
      </g>
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
