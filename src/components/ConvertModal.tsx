// PPTX変換モーダル（うちた式）。
// SUは「コード実行できるAI」に貼る変換プロンプトを発行する。比率と配色上書きだけ任意で触れる。
// 変換そのものはユーザーが ChatGPT(コードインタプリタ) / Claude で実行する。
// つまずき対処・どのAIを使うか等は独立FAQページ（#/faq）へ。

import { useMemo, useState } from 'react'
import { Icon } from './Icon'
import { useModalA11y } from '../hooks/useModalA11y'
import { track } from '../lib/analytics'
import { buildConvertPrompt, type ConvertAspect, type PhotoMode } from '../lib/convertPrompt'

interface ConvertModalProps {
  onClose: () => void
}

const STEPS = [
  { icon: 'image', text: '変換したいスライドを画像かPDFで用意（1スライド＝1枚が一番きれい）。' },
  { icon: 'smart_toy', text: 'コードを実行できるAIを開く（ChatGPTのコードインタプリタ / Claude）。文章だけのAIは不可。' },
  { icon: 'content_paste', text: '下のプロンプトをコピーして貼り、同じメッセージに資料（画像/PDF）を添付して送信。' },
  { icon: 'download', text: '出てきた .pptx をダウンロード → スライドアプリで開き、全選択で編集できるか確認。' },
]

const ASPECTS: { id: ConvertAspect; label: string }[] = [
  { id: '16:9', label: '16:9' },
  { id: '4:3', label: '4:3' },
  { id: 'original', label: '原画のまま' },
]

const PHOTO_MODES: { id: PhotoMode; label: string; hint: string }[] = [
  {
    id: 'keep',
    label: 'そのまま残す',
    hint: '写真は原画から切り出して実画像として残します（見た目はそのまま・移動やリサイズ可）。文字と図形は編集可能なまま。',
  },
  {
    id: 'placeholder',
    label: '差し替え枠',
    hint: '写真は「ここに写真」のプレースホルダ枠にします。あとから自分の画像に差し替えたいとき向け。',
  },
  {
    id: 'drop',
    label: '省く',
    hint: '写真は再現せず省略します。文字と図形だけの軽いスライドにしたいとき向け。',
  },
]

export function ConvertModal({ onClose }: ConvertModalProps) {
  const ref = useModalA11y(true, onClose)
  const [aspect, setAspect] = useState<ConvertAspect>('16:9')
  const [colorOverride, setColorOverride] = useState('')
  const [photoMode, setPhotoMode] = useState<PhotoMode>('keep')
  const [copied, setCopied] = useState(false)

  const prompt = useMemo(
    () => buildConvertPrompt({ aspect, colorOverride, photoMode }),
    [aspect, colorOverride, photoMode],
  )

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = prompt
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    track('copy_convert_prompt', {
      aspect,
      color_override: colorOverride.trim().length > 0,
      photo_mode: photoMode,
    })
  }

  return (
    <div className="su-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="su-modal su-modal--convert"
        role="dialog"
        aria-modal="true"
        aria-label="画像/PDF → 編集可能パワポに変換"
        ref={ref}
      >
        <header className="su-modal__head">
          <h2 className="su-modal__title">画像/PDF → 編集できるパワポに変換</h2>
          <p className="su-modal__sub">
            AIで作った「1枚画像」のスライドを、文字も図形も編集できる .pptx に組み直す変換プロンプトを発行します。変換はお手元のコード実行AI（ChatGPT/Claude）で行います。
          </p>
          <button type="button" className="su-iconbtn" aria-label="閉じる" onClick={onClose}>
            <Icon name="close" size={22} />
          </button>
        </header>

        <div className="su-modal__body su-convert__body">
          <ol className="su-convert__steps">
            {STEPS.map((s, i) => (
              <li key={i} className="su-convert__step">
                <span className="su-convert__num">{i + 1}</span>
                <Icon name={s.icon} size={20} />
                <span>{s.text}</span>
              </li>
            ))}
          </ol>

          <div className="su-convert__opts">
            <div className="su-field">
              <span className="su-field__label">出力の比率</span>
              <div className="su-segmented su-convert__aspect">
                {ASPECTS.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    className={`su-segmented__item${aspect === a.id ? ' is-on' : ''}`}
                    onClick={() => setAspect(a.id)}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            <label className="su-field">
              <span className="su-field__label">配色の上書き（任意）</span>
              <textarea
                className="su-textarea"
                rows={3}
                placeholder={'空欄なら原画からHEX抽出。上書きする時だけ1行ずつ:\nメイン：#1976D2\nアクセント：#D84315'}
                value={colorOverride}
                onChange={(e) => setColorOverride(e.target.value)}
              />
              <span className="su-field__hint">
                白・グレー・黒はそのまま。指定した色だけHEXで上書きされます。
              </span>
            </label>

            <div className="su-field">
              <span className="su-field__label">写真・イラストの扱い</span>
              <div className="su-segmented su-convert__aspect">
                {PHOTO_MODES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className={`su-segmented__item${photoMode === m.id ? ' is-on' : ''}`}
                    onClick={() => setPhotoMode(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <span className="su-field__hint">
                {PHOTO_MODES.find((m) => m.id === photoMode)?.hint}
              </span>
            </div>
          </div>

          <p className="su-convert__pre-label">送信するプロンプト</p>
          <p className="su-field__hint su-convert__pre-hint">
            中身はAIへの指示です。あなたは編集不要 — コピーして貼り、ファイルを添付して送るだけ。
          </p>
          <pre className="su-prompt-text su-convert__pre" tabIndex={0}>{prompt}</pre>

          <a className="su-convert__faqlink" href="#/faq">
            <Icon name="help" size={18} />
            使い方・つまずいたら → よくある質問（FAQ）
          </a>
        </div>

        <div className="su-modal__footer">
          <button type="button" className="su-btn su-btn--ghost" onClick={onClose}>
            閉じる
          </button>
          <button type="button" className="su-btn su-btn--primary" onClick={copy}>
            <Icon name={copied ? 'check' : 'content_copy'} size={18} />
            {copied ? 'コピーしました' : 'プロンプトをコピー'}
          </button>
        </div>
      </div>
    </div>
  )
}
