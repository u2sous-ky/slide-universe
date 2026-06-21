// 保存したセッティングの一覧ドロワー（右→左にせり出す）。
// 各アイテムを押すとプロンプトモーダルが開き、そこから再編集できる。
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'
import { SettingSummary } from './SettingSummary'
import type { SavedSetting } from '../lib/types'

interface SavedSettingsDrawerProps {
  open: boolean
  items: SavedSetting[]
  onOpenItem: (item: SavedSetting) => void
  onRemove: (id: string) => void
  onClose: () => void
}

function formatDate(ts: number): string {
  const d = new Date(ts)
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`
}

export function SavedSettingsDrawer({
  open,
  items,
  onOpenItem,
  onRemove,
  onClose,
}: SavedSettingsDrawerProps) {
  const ref = useModalA11y(open, onClose)
  if (!open) return null

  return (
    <div className="su-overlay su-overlay--right" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="su-drawer" role="dialog" aria-modal="true" aria-label="お気に入りの設定" ref={ref}>
        <header className="su-drawer__head">
          <h2 className="su-drawer__title">お気に入りの設定</h2>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>
        <p className="su-drawer__sub">保存した設定です。押すとプロンプトを確認・再編集できます。</p>

        <div className="su-drawer__scroll">
          {items.length === 0 ? (
            <div className="su-drawer-empty">
              <span className="su-drawer-empty__icon">
                <Icon name="star" size={30} />
              </span>
              <p className="su-drawer-empty__title">まだお気に入りがありません</p>
              <p className="su-drawer-empty__text">
                設問を入力して「この設定をお気に入り保存」から登録すると、ここに並びます。
              </p>
            </div>
          ) : (
            <ul className="su-savelist">
              {items.map((item) => (
                <li key={item.id} className="su-savecard">
                  <button
                    type="button"
                    className="su-savecard__main"
                    onClick={() => onOpenItem(item)}
                  >
                    <span className="su-savecard__name">{item.name}</span>
                    <span className="su-savecard__date">{formatDate(item.createdAt)}</span>
                    <SettingSummary state={item.state} compact />
                  </button>
                  <button
                    type="button"
                    className="su-savecard__del"
                    aria-label={`${item.name} を削除`}
                    onClick={() => onRemove(item.id)}
                  >
                    <Icon name="delete" size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
