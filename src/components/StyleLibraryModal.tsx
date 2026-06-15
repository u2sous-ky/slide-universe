// 世界観ライブラリモーダル（デザイン §5 / コーディング §10）
// 3カラム: 左=絞り込み / 中央=カード一覧 / 右=選択中スタイルの詳細・微調整

import { useEffect, useMemo, useState } from 'react'
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'
import { tuningParamsFor, initTuning, type TuningValues } from '../lib/tuning'
import {
  STYLE_PRESETS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  allImpressions,
  allColorTones,
  getPreset,
} from '../data/stylePresets'
import type { StyleCategory, StylePreset, Tendency } from '../lib/types'

interface StyleLibraryModalProps {
  open: boolean
  currentStyleId: string | null
  currentTuning: TuningValues
  onApply: (id: string, tuning: TuningValues) => void
  onClose: () => void
}

type SortKey = 'category' | 'name'

const TENDENCY_LABEL: Record<Tendency, string> = { low: '低', medium: '中', high: '高' }

function TendencyBar({ label, value }: { label: string; value: Tendency }) {
  const pct = value === 'high' ? 100 : value === 'medium' ? 60 : 25
  return (
    <div className="su-tend">
      <span className="su-tend__label">{label}</span>
      <span className="su-tend__track">
        <span className="su-tend__fill" style={{ width: `${pct}%` }} />
      </span>
      <span className="su-tend__val">{TENDENCY_LABEL[value]}</span>
    </div>
  )
}

export function StyleLibraryModal({
  open,
  currentStyleId,
  currentTuning,
  onApply,
  onClose,
}: StyleLibraryModalProps) {
  const ref = useModalA11y(open, onClose)
  const [focusId, setFocusId] = useState<string | null>(currentStyleId)
  const [tuning, setTuning] = useState<TuningValues>({})
  const [previewId, setPreviewId] = useState<string | null>(null)
  const [category, setCategory] = useState<StyleCategory | 'all'>('all')
  const [impression, setImpression] = useState<string | null>(null)
  const [colorTone, setColorTone] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('category')

  const impressions = useMemo(() => allImpressions(), [])
  const colorTones = useMemo(() => allColorTones(), [])

  const filtered = useMemo(() => {
    let list = STYLE_PRESETS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (impression && !p.impressions.includes(impression)) return false
      if (colorTone && !p.colorTones.includes(colorTone)) return false
      if (search.trim()) {
        const q = search.trim().toLowerCase()
        const hay = `${p.name} ${p.nameEn} ${p.description} ${p.tags.join(' ')}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
    if (sort === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'ja'))
    } else {
      list = [...list].sort(
        (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category),
      )
    }
    return list
  }, [category, impression, colorTone, search, sort])

  const focused: StylePreset | undefined = getPreset(focusId) ?? filtered[0]

  // フォーカス変更/オープン時に微調整値を初期化（選択中スタイルなら現在値を引き継ぐ）
  useEffect(() => {
    if (!focused) return
    if (focused.id === currentStyleId && Object.keys(currentTuning).length > 0) {
      setTuning(currentTuning)
    } else {
      setTuning(initTuning(focused))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused?.id, open])

  const setTuneVal = (key: string, val: string | number) =>
    setTuning((t) => ({ ...t, [key]: val }))

  const resetFilters = () => {
    setCategory('all')
    setImpression(null)
    setColorTone(null)
    setSearch('')
  }

  const previewStyle = getPreset(previewId)

  if (!open) return null

  return (
    <>
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="su-modal su-modal--library"
        role="dialog"
        aria-modal="true"
        aria-label="世界観ライブラリ"
        ref={ref}
      >
        <header className="su-modal__head">
          <h2 className="su-modal__title">世界観ライブラリ</h2>
          <p className="su-modal__sub">資料の世界観を1つ選びます。あとから変更できます。</p>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>

        <div className="su-library">
          {/* 左: 絞り込み */}
          <aside className="su-library__filters">
            <div className="su-filter-group">
              <div className="su-filter-group__head">
                <span>カテゴリ</span>
                <button type="button" className="su-link" onClick={resetFilters}>
                  リセット
                </button>
              </div>
              <button
                type="button"
                className={`su-filter${category === 'all' ? ' is-on' : ''}`}
                onClick={() => setCategory('all')}
              >
                すべて
              </button>
              {CATEGORY_ORDER.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`su-filter${category === c ? ' is-on' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {CATEGORY_LABELS[c]}
                </button>
              ))}
            </div>

            <div className="su-filter-group">
              <div className="su-filter-group__head"><span>印象</span></div>
              <div className="su-filter-tags">
                {impressions.map((im) => (
                  <button
                    key={im}
                    type="button"
                    className={`su-filter-tag${impression === im ? ' is-on' : ''}`}
                    onClick={() => setImpression(impression === im ? null : im)}
                  >
                    {im}
                  </button>
                ))}
              </div>
            </div>

            <div className="su-filter-group">
              <div className="su-filter-group__head"><span>色味の傾向</span></div>
              <div className="su-filter-tags">
                {colorTones.map((ct) => (
                  <button
                    key={ct}
                    type="button"
                    className={`su-filter-tag${colorTone === ct ? ' is-on' : ''}`}
                    onClick={() => setColorTone(colorTone === ct ? null : ct)}
                  >
                    {ct}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* 中央: カード一覧 */}
          <div className="su-library__list">
            <div className="su-library__toolbar">
              <div className="su-search">
                <Icon name="search" size={18} />
                <input
                  type="text"
                  className="su-search__input"
                  placeholder="世界観を検索"
                  aria-label="世界観を検索"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <label className="su-sort">
                並び替え
                <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
                  <option value="category">カテゴリ順</option>
                  <option value="name">名前順</option>
                </select>
              </label>
            </div>

            <div className="su-cards">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className={`su-card${focusId === p.id ? ' is-focus' : ''}${
                    currentStyleId === p.id ? ' is-current' : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={focusId === p.id}
                  onClick={() => setFocusId(p.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setFocusId(p.id)
                    }
                  }}
                >
                  <span className="su-card__thumb" style={{ background: p.thumbnailClass }}>
                    {currentStyleId === p.id && (
                      <span className="su-card__current"><Icon name="check" size={14} filled />選択中</span>
                    )}
                    <button
                      type="button"
                      className="su-card__zoom"
                      aria-label={`${p.name} のプレビューを拡大`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setPreviewId(p.id)
                      }}
                    >
                      <Icon name="visibility" size={20} filled />
                    </button>
                  </span>
                  <span className="su-card__name">{p.name}</span>
                  <span className="su-card__desc">{p.description}</span>
                  <span className="su-card__tags">
                    <span className="su-tag su-tag--cat">{CATEGORY_LABELS[p.category]}</span>
                    {p.impressions.slice(0, 2).map((t) => (
                      <span key={t} className="su-tag">{t}</span>
                    ))}
                  </span>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="su-muted su-cards__empty">条件に合う世界観がありません。</p>
              )}
            </div>
          </div>

          {/* 右: 選択中スタイルの詳細 */}
          <aside className="su-library__detail">
            {focused ? (
              <div className="su-detail__scroll">
                <button
                  type="button"
                  className="su-detail__thumb"
                  style={{ background: focused.thumbnailClass }}
                  aria-label={`${focused.name} のプレビューを拡大`}
                  onClick={() => setPreviewId(focused.id)}
                >
                  <span className="su-detail__zoom"><Icon name="visibility" size={20} filled /></span>
                </button>
                <h3 className="su-detail__name">{focused.name}</h3>
                <p className="su-detail__en">{focused.nameEn}</p>
                <p className="su-detail__desc">{focused.description}</p>

                <div className="su-detail__tags">
                  {focused.tags.map((t) => (
                    <span key={t} className="su-tag">{t}</span>
                  ))}
                </div>

                <div className="su-detail__cols">
                  <div>
                    <h4><Icon name="thumb_up" size={15} />向いている用途</h4>
                    <ul className="su-list">
                      {focused.suitableFor.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4><Icon name="thumb_down" size={15} />向いていない用途</h4>
                    <ul className="su-list su-list--muted">
                      {focused.unsuitableFor.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="su-detail__section">
                  <h4>スタイル傾向</h4>
                  <TendencyBar label="信頼感" value={focused.tendencies.reliability} />
                  <TendencyBar label="ビジュアル優先" value={focused.tendencies.visualPriority} />
                  <TendencyBar label="データ相性" value={focused.tendencies.dataCompatibility} />
                  <TendencyBar label="文字量" value={focused.tendencies.textAmount} />
                </div>

                <div className="su-detail__section">
                  <h4>微調整</h4>
                  {tuningParamsFor(focused).map((t) => (
                    <div key={t.key} className="su-tuning">
                      <span className="su-tuning__label">{t.label}</span>
                      {t.type === 'slider' && (
                        <span className="su-tuning__slider">
                          <input
                            type="range"
                            min={t.min}
                            max={t.max}
                            value={Number(tuning[t.key] ?? t.defaultValue)}
                            aria-label={t.label}
                            onChange={(e) => setTuneVal(t.key, Number(e.target.value))}
                          />
                          {t.leftLabel && (
                            <span className="su-tuning__ends">
                              <span>{t.leftLabel}</span>
                              <span>{t.rightLabel}</span>
                            </span>
                          )}
                        </span>
                      )}
                      {t.type === 'color' && (
                        <label className="su-tuning__color">
                          <input
                            type="color"
                            value={String(tuning[t.key] ?? t.defaultValue)}
                            aria-label={t.label}
                            onChange={(e) => setTuneVal(t.key, e.target.value)}
                          />
                          <span className="su-swatch" style={{ background: String(tuning[t.key] ?? t.defaultValue) }} />
                          {tuning[t.key] ?? t.defaultValue}
                        </label>
                      )}
                    </div>
                  ))}
                  <p className="su-tuning__note">
                    微調整はプリセットの範囲内で生成プロンプトに反映されます。
                  </p>
                </div>
              </div>
            ) : (
              <p className="su-muted">左のカードから世界観を選んでください。</p>
            )}

            <div className="su-library__detail-footer">
              <button type="button" className="su-btn su-btn--ghost" onClick={onClose}>
                キャンセル
              </button>
              <button
                type="button"
                className="su-btn su-btn--primary su-btn--go"
                disabled={!focused}
                onClick={() => focused && onApply(focused.id, tuning)}
              >
                <Icon name="rocket_launch" size={20} filled />
                GO!
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>

    {/* サムネ拡大プレビュー（ライトボックス） */}
    {previewStyle && (
      <div
        className="su-overlay su-lightbox"
        onMouseDown={(e) => e.target === e.currentTarget && setPreviewId(null)}
      >
        <div className="su-lightbox__inner" role="dialog" aria-modal="true" aria-label={`${previewStyle.name} プレビュー`}>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={() => setPreviewId(null)}>
            <Icon name="close" size={22} />
          </button>
          <div className="su-lightbox__thumb" style={{ background: previewStyle.thumbnailClass }} />
          <div className="su-lightbox__meta">
            <h3 className="su-lightbox__name">{previewStyle.name}</h3>
            <p className="su-lightbox__en">{previewStyle.nameEn}</p>
            <p className="su-lightbox__desc">{previewStyle.description}</p>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
