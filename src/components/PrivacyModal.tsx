// プライバシー / Cookie ポリシー（フッター・Cookie告知から開く）
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'

interface PrivacyModalProps {
  open: boolean
  onClose: () => void
}

export function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  const ref = useModalA11y(open, onClose)
  if (!open) return null
  return (
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="su-modal su-modal--privacy" role="dialog" aria-modal="true" aria-label="プライバシー・Cookieポリシー" ref={ref}>
        <header className="su-modal__head">
          <h2 className="su-modal__title">プライバシー・Cookieポリシー</h2>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>

        <div className="su-policy">
          <section>
            <h3>取得・利用する情報</h3>
            <p>
              SLIDE UNIVERSE（以下「本サービス」）は、サービス改善とより良い体験のため、以下の情報を扱います。
              氏名・メールアドレス等の個人を直接特定する情報は取得しません。
            </p>
          </section>

          <section>
            <h3>1. ブラウザ内保存（localStorage）</h3>
            <p>
              「お気に入り」（プリセット・設定の保存）は、お使いのブラウザ内にのみ保存されます。
              サーバーには送信されず、当方が閲覧することはできません。ブラウザのデータを消去すれば削除されます。
            </p>
          </section>

          <section>
            <h3>2. アクセス解析（Cookie・Google アナリティクス）</h3>
            <p>
              利用状況の把握のため、Google アナリティクス（GA4）を利用します。
              これにより Cookie 等を用いて、ページの閲覧やボタン操作（どの世界観・どの組み合わせが使われたか等）を
              個人を特定しない統計情報として収集します。これらは本サービスの改善のみに用います。
            </p>
            <p>
              本サービスは Google Consent Mode v2 を採用し、<strong>既定ではすべての計測を停止</strong>しています。
              下部のCookie通知で「同意する」を選んだ場合にのみ、GA4による計測Cookieが有効になります（オプトイン方式）。
              データは Google 社のプライバシーポリシーに基づき処理され、データの一部は米国等へ移転される場合があります。
            </p>
          </section>

          <section>
            <h3>3. 同意の管理（オプトイン）</h3>
            <p>
              初回訪問時にCookie利用の通知を表示します。<strong>「同意する」を選ぶまで計測Cookieは設定されません。</strong>
              「拒否」を選んだ場合も計測は行いません。選択はいつでもブラウザのデータ（localStorage / Cookie）消去で取り消せ、
              次回訪問時に再度選択できます。
            </p>
          </section>

          <section>
            <h3>4. 利用者の権利</h3>
            <p>
              本サービスは個人を直接特定する情報を保持しませんが、ご自身に関する情報の確認・削除等のご要望は
              運営者までご連絡ください。Cookie・localStorageはブラウザ側でいつでも削除できます。
            </p>
          </section>

          <section>
            <h3>運営者・お問い合わせ</h3>
            <p>
              運営者: SLIDE UNIVERSE。本ポリシーに関するお問い合わせは運営者までご連絡ください
              （お問い合わせ窓口は今後設置予定です）。本ポリシーは予告なく改定する場合があります。
            </p>
            <p className="su-policy__date">最終更新日: 2026年6月20日</p>
          </section>
        </div>

        <div className="su-modal__footer">
          <button type="button" className="su-btn su-btn--primary" onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  )
}
