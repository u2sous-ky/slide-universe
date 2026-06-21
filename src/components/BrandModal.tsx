// ブランド前提（brand.md）の編集モーダル。
// AIに一般論を書かせないための「判断基準」を1枚化する。記入は全項目任意で、
// 入力したものだけが全プロンプトの最優先制約として注入される。
import { useState } from 'react'
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'
import { EMPTY_BRAND, hasBrandContent, type BrandProfile } from '../lib/types'

interface BrandModalProps {
  value: BrandProfile
  onSave: (next: BrandProfile) => void
  onClear: () => void
  onClose: () => void
}

interface FieldDef {
  key: keyof BrandProfile
  label: string
  placeholder: string
  hint?: string
  strong?: boolean // 特に効く項目
}

const FIELDS: FieldDef[] = [
  { key: 'audience', label: '誰に届けるか', placeholder: '例: 40〜60代の個人事業主・講師・経営者。発信や商品説明がブレて困っている人。' },
  { key: 'promise', label: '約束する変化', placeholder: '例: 言葉と見た目がブレない状態。一読で「自分向けだ」と伝わる発信になる。' },
  { key: 'belief', label: '信じていること', placeholder: '例: 見た目の前に、誰に何を約束するかを言葉にする必要がある。' },
  { key: 'useWords', label: '使う言葉', placeholder: '例: 判断基準 / 前提 / 言い切る / 整える。語彙とトーンをここに寄せる。' },
  { key: 'avoidWords', label: '使わない言葉', placeholder: '例: 誰でも簡単 / 爆速で成果 / AIで全部解決 / 自分らしく輝く / 未来が変わる', hint: '言い換えも禁止。AIは禁止されていない言葉を平気で出すので、ここが一番効きます。', strong: true },
  { key: 'keepImpression', label: '残したい印象', placeholder: '例: 落ち着いた知性。煽らない確信。事業者に信頼される。' },
  { key: 'avoidImpression', label: '避けたい印象', placeholder: '例: ふわっとした自己啓発 / 派手な自己ブランディング / プロンプト小技集っぽさ' },
  { key: 'notDo', label: 'やらないこと', placeholder: '例: 煽り / 誇大な数字の約束 / 一般論の量産 / テンプレ丸写し', hint: '提案や表現として持ち込ませない境界線。', strong: true },
]

export function BrandModal({ value, onSave, onClear, onClose }: BrandModalProps) {
  const ref = useModalA11y(true, onClose)
  const [draft, setDraft] = useState<BrandProfile>({ ...EMPTY_BRAND, ...value })

  const update = (key: keyof BrandProfile, v: string) => setDraft((d) => ({ ...d, [key]: v }))
  const filled = hasBrandContent(draft)

  return (
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="su-modal su-modal--brand"
        role="dialog"
        aria-modal="true"
        aria-label="ブランド前提（brand.md）"
        ref={ref}
      >
        <header className="su-modal__head">
          <h2 className="su-modal__title">ブランド前提（brand.md）</h2>
          <p className="su-modal__sub">
            AIに一般論を書かせないための「判断基準」。記入した項目だけが、生成する全プロンプトの最優先制約として効きます（全部任意・空欄はプロンプトに出ません）。
          </p>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>

        <div className="su-modal__body su-brand__body">
          {FIELDS.map((f) => (
            <label className="su-field" key={f.key}>
              <span className="su-field__label">
                {f.label}
                {f.strong && <span className="su-brand__badge">特に効く</span>}
              </span>
              <textarea
                className="su-textarea su-brand__textarea"
                placeholder={f.placeholder}
                value={draft[f.key]}
                rows={2}
                onChange={(e) => update(f.key, e.target.value)}
              />
              {f.hint && <span className="su-field__hint">{f.hint}</span>}
            </label>
          ))}
        </div>

        <div className="su-modal__footer">
          <button type="button" className="su-btn su-btn--ghost" onClick={onClear}>
            クリア
          </button>
          <span className="su-brand__spacer" />
          <button type="button" className="su-btn su-btn--ghost" onClick={onClose}>
            キャンセル
          </button>
          <button type="button" className="su-btn su-btn--primary" onClick={() => onSave(draft)}>
            <Icon name={filled ? 'check' : 'edit'} size={18} />
            保存する
          </button>
        </div>
      </div>
    </div>
  )
}
