// Cookie利用の告知バナー（初回訪問のみ）。同意/拒否を localStorage に保存。
import { useState } from 'react'
import { CONSENT_KEY } from '../lib/analytics'

export function CookieBanner({ onDetails }: { onDetails: () => void }) {
  const [show, setShow] = useState(() => {
    try {
      return !localStorage.getItem(CONSENT_KEY)
    } catch {
      return false
    }
  })
  if (!show) return null

  const choose = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_KEY, value)
    } catch {
      /* localStorage不可は無視 */
    }
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      // Consent Mode v2 を更新（同意=granted / 拒否=denied）。gtagはindex.htmlで定義済み
      const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
      if (typeof g === 'function') {
        g('consent', 'update', { analytics_storage: value === 'accepted' ? 'granted' : 'denied' })
      }
      window.dataLayer.push({ event: 'cookie_consent', consent: value })
    }
    setShow(false)
  }

  return (
    <div className="su-cookie" role="dialog" aria-label="Cookieの利用について">
      <p className="su-cookie__text">
        本サイトは利用状況の分析のため Cookie（Google アナリティクス）を使用します。
        <strong>同意いただくまで分析Cookieは設定されません。</strong>
        <button type="button" className="su-cookie__link" onClick={onDetails}>
          詳細
        </button>
      </p>
      <div className="su-cookie__actions">
        <button type="button" className="su-btn su-btn--ghost su-btn--sm" onClick={() => choose('declined')}>
          拒否
        </button>
        <button type="button" className="su-btn su-btn--primary su-btn--sm" onClick={() => choose('accepted')}>
          同意する
        </button>
      </div>
    </div>
  )
}
