// SLIDE UNIVERSE — アプリ本体
// 画面は4つだけ: TopPage / StyleLibraryModal / DetailSettingsDrawer / GeneratedPromptModal

import { useState } from 'react'
import { Header } from './components/Header'
import { QuestionPanel } from './components/QuestionPanel'
import { PreviewPanel } from './components/PreviewPanel'
import { StyleLibraryModal } from './components/StyleLibraryModal'
import { DetailSettingsDrawer } from './components/DetailSettingsDrawer'
import { GeneratedPromptModal } from './components/GeneratedPromptModal'
import { HelpModal } from './components/HelpModal'
import { useBuilderState } from './hooks/useBuilderState'
import { getPreset } from './data/stylePresets'
import { compilePrompt } from './lib/promptCompiler'

export default function App() {
  const api = useBuilderState()
  const [libraryOpen, setLibraryOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [prompt, setPrompt] = useState<string | null>(null)

  const handleGenerate = () => {
    const style = getPreset(api.state.styleId)
    if (!style) return
    setPrompt(compilePrompt(api.state, style))
  }

  return (
    <div className="su-app">
      <Header onHelp={() => setHelpOpen(true)} />

      <main className="su-top">
        <div className="su-top__left">
          <QuestionPanel api={api} onOpenLibrary={() => setLibraryOpen(true)} />
        </div>
        <div className="su-top__right">
          <PreviewPanel
            api={api}
            onGenerate={handleGenerate}
            onOpenDetail={() => setDetailOpen(true)}
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
        onClose={() => setPrompt(null)}
      />

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  )
}
