// スタイルの3枚並べ表示（キービジュアル＋資料イメージ2枚）。未配置はプレースホルダ。
import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import type { StylePreset } from '../lib/types'

function Thumb({ src, label, gradient }: { src: string; label: string; gradient: string }) {
  const [err, setErr] = useState(false)
  useEffect(() => setErr(false), [src])
  return err ? (
    <div className="su-thumb3__ph" style={{ background: gradient }} aria-label={`${label}（準備中）`}>
      <Icon name="image" size={18} />
    </div>
  ) : (
    <img
      src={src}
      alt={label}
      className="su-thumb3__img"
      loading="lazy"
      decoding="async"
      onError={() => setErr(true)}
    />
  )
}

export function StyleThumbStrip({ style }: { style: StylePreset }) {
  const items = [
    { src: `/thumbs/${style.id}.webp`, label: 'キービジュアル' },
    { src: `/thumbs/${style.id}-1.webp`, label: '資料イメージ 1' },
    { src: `/thumbs/${style.id}-2.webp`, label: '資料イメージ 2' },
  ]
  return (
    <div className="su-thumb3">
      {items.map((it) => (
        <Thumb key={it.label} src={it.src} label={it.label} gradient={style.thumbnailClass} />
      ))}
    </div>
  )
}
