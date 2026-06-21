// スタイルのプレビュー拡大スライダー: キービジュアル＋資料イメージ2枚（未配置はプレースホルダ）
// ライブラリのライトボックスと、右パネル「選択中の世界観」で共用。
import { useEffect, useMemo, useState } from 'react'
import { Icon } from './Icon'
import type { StylePreset } from '../lib/types'

export function StylePreviewSlider({ style, compact = false }: { style: StylePreset; compact?: boolean }) {
  const slides = useMemo(
    () => [
      { src: `/thumbs/${style.id}.webp`, label: 'キービジュアル' },
      { src: `/thumbs/${style.id}-1.webp`, label: '資料イメージ 1' },
      { src: `/thumbs/${style.id}-2.webp`, label: '資料イメージ 2' },
    ],
    [style.id],
  )
  const [i, setI] = useState(0)
  const [missing, setMissing] = useState<Record<number, boolean>>({})

  useEffect(() => {
    setI(0)
    setMissing({})
  }, [style.id])

  const go = (n: number) => setI((v) => (v + n + slides.length) % slides.length)
  const active = slides[i]

  return (
    <div
      className={`su-slider${compact ? ' su-slider--compact' : ''}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
    >
      <div className="su-slider__stage" style={{ background: style.thumbnailClass }}>
        <div className="su-slider__track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s, idx) => (
            <div className="su-slider__slide" key={s.label}>
              {missing[idx] ? (
                <div className="su-slider__ph">
                  <Icon name="image" size={compact ? 22 : 30} />
                  <span>{s.label}（準備中）</span>
                </div>
              ) : (
                <img
                  src={s.src}
                  alt={`${style.name} ${s.label}`}
                  className="su-slider__img"
                  loading="lazy"
                  decoding="async"
                  onError={() => setMissing((m) => ({ ...m, [idx]: true }))}
                />
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="su-slider__nav su-slider__nav--prev"
          aria-label="前へ"
          onClick={() => go(-1)}
        >
          <Icon name="chevron_left" size={compact ? 18 : 26} />
        </button>
        <button
          type="button"
          className="su-slider__nav su-slider__nav--next"
          aria-label="次へ"
          onClick={() => go(1)}
        >
          <Icon name="chevron_right" size={compact ? 18 : 26} />
        </button>
        {!compact && <span className="su-slider__caption">{active.label}</span>}
      </div>
      <div className="su-slider__dots">
        {slides.map((s, idx) => (
          <button
            key={s.label}
            type="button"
            className={`su-slider__dot${idx === i ? ' is-on' : ''}`}
            aria-label={`${idx + 1}枚目: ${s.label}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  )
}
