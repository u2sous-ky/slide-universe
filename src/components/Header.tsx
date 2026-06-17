// ヘッダー（デザイン §9）— 最小構成。履歴/お気に入り/マイページは置かない。

import { Icon } from './Icon'

interface HeaderProps {
  onHelp: () => void
}

export function Header({ onHelp }: HeaderProps) {
  return (
    <header className="su-header">
      <div className="su-header__brand">
        <img src="/logo-white.png" className="su-header__logo" alt="SLIDE UNIVERSE" />
      </div>
      <button type="button" className="su-btn su-btn--ghost" onClick={onHelp}>
        <Icon name="help" size={18} />
        使い方
      </button>
    </header>
  )
}
