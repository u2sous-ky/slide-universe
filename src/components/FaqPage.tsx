// 独立FAQページ（#/faq）。PPTX変換の「中級者前提」を埋めるよくある質問。
// ルーティングはハッシュ（App.tsx の useHashRoute）。GitHub Pagesの追加設定不要。

import { Icon } from './Icon'
import { CONVERT_FAQ } from '../data/faq'

export function FaqPage() {
  return (
    <div className="su-page">
      <header className="su-page__head">
        <a className="su-btn su-btn--ghost" href="#/">
          <Icon name="arrow_back" size={18} />
          戻る
        </a>
        <img
          src="/logo.png"
          className="su-page__logo"
          alt="SLIDE UNIVERSE"
          width="271"
          height="38"
          decoding="async"
        />
      </header>

      <main className="su-page__body">
        <h1 className="su-page__title">PPTX変換 — よくある質問</h1>
        <p className="su-page__lead">
          AIで作った「1枚画像」のスライドを、編集できるパワポ（.pptx）に変換するときの疑問とつまずきをまとめました。
        </p>

        <div className="su-faq">
          {CONVERT_FAQ.map((f, i) => (
            <details key={i} className="su-faq__item">
              <summary className="su-faq__q">
                <Icon name="expand_more" size={20} className="su-faq__caret" />
                {f.q}
              </summary>
              <p className="su-faq__a">{f.a}</p>
            </details>
          ))}
        </div>

        <a className="su-btn su-btn--primary su-faq__back" href="#/">
          <Icon name="arrow_back" size={18} />
          変換ツールに戻る
        </a>
      </main>
    </div>
  )
}
