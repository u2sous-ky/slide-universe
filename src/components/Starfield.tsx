// 宇宙背景の星フィールド。数百の星が個別の位相で瞬き、ゆっくりドリフトする。
// たまに流れ星が流れ、超低確率でスペースインベーダー風UFOが横切る。
// Canvasで描画（軽量）。prefers-reduced-motion では静止＆演出なし。

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  base: number
  sp: number
  ph: number
  hue: string
}

interface Shooting {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  max: number
  len: number
}

interface Ufo {
  x: number
  y: number
  baseY: number
  vx: number
  t: number
}

const STAR_HUES = ['#ffffff', '#ffffff', '#ffffff', '#dbe4ff', '#f3e0ff', '#cfe9ff']

// クラシックなインベーダーのドット絵（11×8）
const INVADER = [
  '00100000100',
  '00010001000',
  '00111111100',
  '01101110110',
  '11111111111',
  '10111111101',
  '10100000101',
  '00011011000',
]

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
    let shooting: Shooting[] = []
    let ufo: Ufo | null = null
    let nextShoot = 0
    let last = 0
    let raf = 0

    const build = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 1400)
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

    const spawnShooting = () => {
      // 画面上部のどこかから右下（または左下）へ
      const fromLeft = Math.random() < 0.7
      const x = fromLeft ? Math.random() * w * 0.5 : w * 0.5 + Math.random() * w * 0.5
      const y = Math.random() * h * 0.4
      const speed = 9 + Math.random() * 6
      const ang = (fromLeft ? 0.32 : 0.68) * Math.PI + (Math.random() - 0.5) * 0.2
      shooting.push({
        x,
        y,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed,
        life: 0,
        max: 60 + Math.random() * 30,
        len: 90 + Math.random() * 70,
      })
    }

    const drawShooting = (s: Shooting) => {
      const tailX = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.len
      const tailY = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.len
      const fade = 1 - Math.abs(s.life / s.max - 0.5) * 2 // 出現→消滅で山なり
      const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
      grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`)
      grad.addColorStop(0.4, `rgba(200,210,255,${0.35 * fade})`)
      grad.addColorStop(1, 'rgba(200,210,255,0)')
      ctx.strokeStyle = grad
      ctx.lineWidth = 2
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(s.x, s.y)
      ctx.lineTo(tailX, tailY)
      ctx.stroke()
    }

    const spawnUfo = () => {
      const fromLeft = Math.random() < 0.5
      const baseY = 60 + Math.random() * (h * 0.35)
      ufo = {
        x: fromLeft ? -80 : w + 80,
        y: baseY,
        baseY,
        vx: (fromLeft ? 1 : -1) * (1.4 + Math.random() * 0.8),
        t: 0,
      }
    }

    const drawUfo = (u: Ufo) => {
      const px = 3 // ドットサイズ
      const cols = INVADER[0].length
      const rows = INVADER.length
      const ox = u.x - (cols * px) / 2
      const oy = u.y - (rows * px) / 2
      ctx.save()
      ctx.shadowColor = 'rgba(120,255,170,0.9)'
      ctx.shadowBlur = 8
      ctx.fillStyle = '#7dffa6'
      for (let r = 0; r < rows; r++) {
        const row = INVADER[r]
        for (let c = 0; c < cols; c++) {
          if (row[c] === '1') ctx.fillRect(ox + c * px, oy + r * px, px, px)
        }
      }
      ctx.restore()
    }

    const render = (t: number) => {
      const dt = last ? Math.min((t - last) / 16, 3) : 1
      last = t
      ctx.clearRect(0, 0, w, h)

      // 星
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
        if (s.r > 1.05) {
          ctx.globalAlpha = Math.min(1, s.base * tw) * 0.18
          ctx.beginPath()
          ctx.arc(x, y, s.r * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1

      if (!reduce) {
        // 流れ星: 6〜16秒間隔
        if (t > nextShoot) {
          spawnShooting()
          nextShoot = t + 6000 + Math.random() * 10000
        }
        shooting = shooting.filter((s) => s.life < s.max)
        for (const s of shooting) {
          s.x += s.vx * dt
          s.y += s.vy * dt
          s.life += dt
          drawShooting(s)
        }

        // UFO: 超低確率で出現（出ていない時のみ）
        if (!ufo && Math.random() < 0.00002) spawnUfo()
        if (ufo) {
          ufo.t += dt
          ufo.x += ufo.vx * dt
          ufo.y = ufo.baseY + Math.sin(ufo.t * 0.06) * 6
          drawUfo(ufo)
          if (ufo.x < -120 || ufo.x > w + 120) ufo = null
        }
      }

      if (!reduce) raf = requestAnimationFrame(render)
    }

    build()
    nextShoot = (typeof performance !== 'undefined' ? performance.now() : 0) + 4000 + Math.random() * 6000
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
