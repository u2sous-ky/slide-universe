// About ページ — ブランドの世界観を伝える全画面スクロールビュー。

import { Icon } from './Icon'
import { STYLE_PRESETS, thumbBg } from '../data/stylePresets'

interface AboutPageProps {
  onClose: () => void
  onStart: () => void
}

const ESSENCE = ['Minimal', 'Cosmic', 'Intelligent', 'Clean', 'Expansive']

const STEPS = [
  { icon: 'edit_note', title: '6つの設問に答える', desc: '用途・ターゲット・ゴール・印象・詳しさ。資料の設計図を言葉にします。' },
  { icon: 'palette', title: '世界観を1つ選ぶ', desc: '34のビジュアルスタイルから、資料の空気に合う世界観を選択。' },
  { icon: 'rocket_launch', title: 'プロンプトを生成', desc: '高密度プロンプトが完成。NotebookLMに貼るだけで、伝わるスライドに。' },
]

const PALETTE = [
  { name: 'Deep Navy', hex: '#0E1323' },
  { name: 'Indigo', hex: '#1F263B' },
  { name: 'Cosmic', hex: 'linear-gradient(135deg,#8a7bff,#f078c8)' },
  { name: 'Violet', hex: '#8A7BFF' },
  { name: 'Mist', hex: '#F5F6FA' },
]

export function AboutPage({ onClose, onStart }: AboutPageProps) {
  return (
    <div className="su-about" role="dialog" aria-label="Slide Universe について">
      <div className="su-about__bar">
        <img src="/logo-white.png" className="su-about__logo" alt="SLIDE UNIVERSE" />
        <button type="button" className="su-iconbtn su-about__close" aria-label="閉じる" onClick={onClose}>
          <Icon name="close" size={22} />
        </button>
      </div>

      <div className="su-about__scroll">
        {/* Hero */}
        <section className="su-about__hero">
          <img src="/logo-white.png" className="su-about__hero-logo" alt="SLIDE UNIVERSE" />
          <h1 className="su-about__tag-en">Present ideas that move the world forward.</h1>
          <p className="su-about__tag-jp">伝わる構造と、惹き込む世界観を。</p>
          <button type="button" className="su-btn su-btn--primary su-btn--go su-about__cta" onClick={onStart}>
            <Icon name="rocket_launch" size={20} filled />
            スライドを作る
          </button>
        </section>

        {/* What */}
        <section className="su-about__sec">
          <h2 className="su-about__h2">Slide Universe とは</h2>
          <p className="su-about__lead">
            NotebookLM に入れた資料から、<strong>伝わる構造</strong>・<strong>惹き込む世界観</strong>・
            <strong>破綻しない品質ルール</strong>を同時に設計した「高密度プロンプト」を生成するメーカーです。
            プロンプトを手で書くのではなく、その設計そのものを代行します。
          </p>
        </section>

        {/* Essence */}
        <section className="su-about__sec">
          <h2 className="su-about__h2">Brand Essence</h2>
          <div className="su-about__essence">
            {ESSENCE.map((e) => (
              <span key={e} className="su-about__essence-item">{e}</span>
            ))}
          </div>
        </section>

        {/* How */}
        <section className="su-about__sec">
          <h2 className="su-about__h2">使い方は3ステップ</h2>
          <div className="su-about__steps">
            {STEPS.map((s, i) => (
              <div key={s.title} className="su-about__step">
                <span className="su-about__step-num">{i + 1}</span>
                <Icon name={s.icon} size={26} />
                <h3 className="su-about__step-title">{s.title}</h3>
                <p className="su-about__step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Worldviews */}
        <section className="su-about__sec">
          <h2 className="su-about__h2">{STYLE_PRESETS.length}の世界観</h2>
          <p className="su-about__lead">
            ミニマルなビジネスから、アイソメトリック、モード、漫画、ボクセルまで。資料の目的に合わせて選べます。
          </p>
          <div className="su-about__grid">
            {STYLE_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className="su-about__thumb"
                style={{ background: thumbBg(p) }}
                onClick={onStart}
                aria-label={`${p.name} を見る`}
              >
                <span className="su-about__thumb-name">{p.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Palette */}
        <section className="su-about__sec">
          <h2 className="su-about__h2">Color Palette</h2>
          <div className="su-about__palette">
            {PALETTE.map((c) => (
              <div key={c.name} className="su-about__swatch-wrap">
                <span className="su-about__swatch" style={{ background: c.hex }} />
                <span className="su-about__swatch-name">{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="su-about__footer">
          <h2 className="su-about__h2">準備はいい？</h2>
          <p className="su-about__lead">あなたの資料を、惹き込む一連のスライドへ。</p>
          <button type="button" className="su-btn su-btn--primary su-btn--go su-about__cta" onClick={onStart}>
            <Icon name="rocket_launch" size={20} filled />
            今すぐ作る
          </button>
          <p className="su-about__copy">SLIDE UNIVERSE — slideuniverse.teklife.jp</p>
        </section>
      </div>
    </div>
  )
}
