// ヘッダー（デザイン §9）。右にお気に入り（保存設定）と使い方。
// ロゴは公式PNG（市松背景をコード除去した透過版）。

import { Icon } from './Icon'

interface HeaderProps {
  onHelp: () => void
  onOpenFavorites: () => void
  favoritesCount: number
  onOpenBrand: () => void
  brandActive: boolean
  onOpenConvert: () => void
}

export function Header({
  onHelp,
  onOpenFavorites,
  favoritesCount,
  onOpenBrand,
  brandActive,
  onOpenConvert,
}: HeaderProps) {
  return (
    <header className="su-header">
      <div className="su-header__brand">
        <img
          src="/logo.png"
          className="su-header__logo"
          alt="SLIDE UNIVERSE"
          width="271"
          height="38"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="su-header__actions">
        <button
          type="button"
          className="su-btn su-btn--ghost"
          onClick={onOpenConvert}
          title="AIで作った1枚画像のスライドを、編集できるパワポ(.pptx)に変換するプロンプトを発行"
        >
          <Icon name="transform" size={18} />
          PPTX変換
        </button>
        {/* 「ブランド」ボタンは一旦非表示（上級者向け）。BrandModal本体とprops/stateは残置＝復活はこのボタンを戻すだけ。 */}
        <button type="button" className="su-btn su-btn--ghost" onClick={onOpenFavorites}>
          <Icon name="star" size={18} filled={favoritesCount > 0} />
          お気に入り{favoritesCount > 0 ? `（${favoritesCount}）` : ''}
        </button>
        <button type="button" className="su-btn su-btn--ghost" onClick={onHelp}>
          <Icon name="help" size={18} />
          使い方
        </button>
      </div>
    </header>
  )
}
