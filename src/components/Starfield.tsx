// 宇宙背景の星フィールド。数百の星が個別の位相で瞬き、ゆっくりドリフトする。
// Canvasで描画（軽量）。prefers-reduced-motion では静止表示。

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  base: number // 基本の明るさ
  sp: number // 瞬きの速さ
  ph: number // 位相
  hue: string
}

const STAR_HUES = ['#ffffff', '#ffffff', '#ffffff', '#dbe4ff', '#f3e0ff', '#cfe9ff']

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let stars: Star[] = []
    let raf = 0

    const build = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // 密度: アンドロメダ星群のように非常に密に
      const count = Math.round((w * h) / 2200)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        base: Math.random() * 0.6 + 0.35,
        sp: Math.random() * 1.8 + 0.4,
        ph: Math.random() * Math.PI * 2,
        hue: STAR_HUES[Math.floor(Math.random() * STAR_HUES.length)],
      }))
    }

    const render = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const drift = reduce ? 0 : Math.sin(t * 0.00006) * 8
      const driftY = reduce ? 0 : Math.cos(t * 0.00005) * 6
      for (const s of stars) {
        const tw = reduce ? 1 : 0.5 + 0.5 * Math.sin(t * 0.001 * s.sp + s.ph)
        const x = s.x + drift * (s.r / 1.6)
        const y = s.y + driftY * (s.r / 1.6)
        ctx.globalAlpha = Math.min(1, s.base * tw)
        ctx.fillStyle = s.hue
        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        ctx.fill()
        // 明るい星はかすかな光芒
        if (s.r > 1.05) {
          ctx.globalAlpha = Math.min(1, s.base * tw) * 0.18
          ctx.beginPath()
          ctx.arc(x, y, s.r * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      if (!reduce) raf = requestAnimationFrame(render)
    }

    build()
    if (reduce) render(0)
    else raf = requestAnimationFrame(render)

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(build, 150)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="su-stars" aria-hidden="true" />
}
