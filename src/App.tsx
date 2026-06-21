// SLIDE UNIVERSE — アプリ本体
// 画面は4つだけ: TopPage / StyleLibraryModal / DetailSettingsDrawer / GeneratedPromptModal

import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { FaqPage } from './components/FaqPage'
import { QuestionPanel } from './components/QuestionPanel'
import { PreviewPanel } from './components/PreviewPanel'
import { StyleLibraryModal } from './components/StyleLibraryModal'
import { DetailSettingsDrawer } from './components/DetailSettingsDrawer'
import { GeneratedPromptModal } from './components/GeneratedPromptModal'
import { SaveSettingModal } from './components/SaveSettingModal'
import { SavedSettingsDrawer } from './components/SavedSettingsDrawer'
import { HelpModal } from './components/HelpModal'
import { PrivacyModal } from './components/PrivacyModal'
import { CookieBanner } from './components/CookieBanner'
import { BrandModal } from './components/BrandModal'
import { ConvertModal } from './components/ConvertModal'
import { useBuilderState } from './hooks/useBuilderState'
import { useSavedSettings } from './hooks/useSavedSettings'
import { useBrandProfile } from './hooks/useBrandProfile'
import { getPreset } from './data/stylePresets'
import { compilePrompt } from './lib/promptCompiler'
import { track, comboParams } from './lib/analytics'
import { hasBrandContent, type BuilderState } from './lib/types'

// ハッシュルーティング（GitHub Pages の追加設定不要）。#/faq で独立FAQページ。
function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return hash
}

export default function App() {
  const route = useHashRoute()
  const api = useBuilderState()
  const saved = useSavedSettings()
  const { brand, setBrand, clearBrand } = useBrandProfile()
  const [libraryOpen, setLibraryOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)
  const [convertOpen, setConvertOpen] = useState(false)
  const [prompt, setPrompt] = useState<string | null>(null)
  const [saveOpen, setSaveOpen] = useState(false)
  const [favOpen, setFavOpen] = useState(false)
  // お気に入りから開いたプロンプトのとき、再編集できるよう元状態を控える
  const [reeditState, setReeditState] = useState<BuilderState | null>(null)

  const handleGenerate = () => {
    const style = getPreset(api.state.styleId)
    if (!style) return
    setReeditState(null)
    setPrompt(compilePrompt(api.state, style, brand))
    // どの組み合わせで生成されたか（人気の世界観・パラメータ集計用）
    track('generate_prompt', { ...comboParams(api.state), brand_set: hasBrandContent(brand) })
  }

  // 保存済みセッティングを開く → ドロワーを閉じてプロンプト表示（再編集ボタン付き）
  const openSavedItem = (snapshot: BuilderState) => {
    const style = getPreset(snapshot.styleId)
    setFavOpen(false)
    setReeditState(snapshot)
    setPrompt(
      style
        ? compilePrompt(snapshot, style, brand)
        : '（この設定には世界観が未選択のため、プロンプトを生成できません。再編集で世界観を選んでください。）',
    )
  }

  // 再編集: 控えた状態を入力に戻し、関連モーダルを閉じる
  const reedit = () => {
    if (reeditState) api.restoreState(reeditState)
    setPrompt(null)
    setReeditState(null)
    setFavOpen(false)
  }

  if (route === '#/faq') return <FaqPage />

  return (
    <div className="su-app">
      <Header
        onHelp={() => setHelpOpen(true)}
        onOpenFavorites={() => setFavOpen(true)}
        favoritesCount={saved.count}
        onOpenBrand={() => setBrandOpen(true)}
        brandActive={hasBrandContent(brand)}
        onOpenConvert={() => setConvertOpen(true)}
      />

      <main className="su-top">
        <div className="su-top__left">
          <QuestionPanel api={api} onOpenLibrary={() => setLibraryOpen(true)} />
        </div>
        <div className="su-top__right">
          <PreviewPanel
            api={api}
            onGenerate={handleGenerate}
            onOpenDetail={() => setDetailOpen(true)}
            onSaveSetting={() => setSaveOpen(true)}
          />
        </div>
      </main>

      <StyleLibraryModal
        open={libraryOpen}
        currentStyleId={api.state.styleId}
        currentTuning={api.state.tuning}
        onApply={(id, tuning) => {
          api.setStyle(id, tuning)
          setLibraryOpen(false)
          // どの世界観ライブラリが選ばれたか
          const st = getPreset(id)
          track('select_style', { style_id: id, style_name: st?.name, style_category: st?.category })
        }}
        onClose={() => setLibraryOpen(false)}
      />

      <DetailSettingsDrawer
        open={detailOpen}
        value={api.state.detailSettings}
        onApply={(v) => {
          api.setDetailSettings(v)
          setDetailOpen(false)
        }}
        onClose={() => setDetailOpen(false)}
      />

      <GeneratedPromptModal
        open={prompt !== null}
        prompt={prompt ?? ''}
        onClose={() => {
          setPrompt(null)
          setReeditState(null)
        }}
        onReedit={reeditState ? reedit : undefined}
      />

      {saveOpen && (
        <SaveSettingModal
          state={api.state}
          onSave={(name) => {
            saved.add(name, api.state)
            setSaveOpen(false)
            track('save_setting', comboParams(api.state))
          }}
          onClose={() => setSaveOpen(false)}
        />
      )}

      <SavedSettingsDrawer
        open={favOpen}
        items={saved.items}
        onOpenItem={(item) => openSavedItem(item.state)}
        onRemove={saved.remove}
        onClose={() => setFavOpen(false)}
      />

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />

      {brandOpen && (
        <BrandModal
          value={brand}
          onSave={(next) => {
            setBrand(next)
            setBrandOpen(false)
          }}
          onClear={() => {
            clearBrand()
            setBrandOpen(false)
          }}
          onClose={() => setBrandOpen(false)}
        />
      )}

      {convertOpen && <ConvertModal onClose={() => setConvertOpen(false)} />}

      <footer className="su-footer">
        <span>© 2026 SLIDE UNIVERSE</span>
        <a className="su-footer__link" href="#/faq">
          PPTX変換 FAQ
        </a>
        <button type="button" className="su-footer__link" onClick={() => setPrivacyOpen(true)}>
          プライバシー・Cookieポリシー
        </button>
      </footer>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookieBanner onDetails={() => setPrivacyOpen(true)} />
    </div>
  )
}
