// SLIDE UNIVERSE — 入力状態管理（MVP: useState、DB不要）

import { useCallback, useState } from 'react'
import {
  INITIAL_BUILDER_STATE,
  type BuilderState,
  type DetailSettings,
  type OutputDepth,
} from '../lib/types'

export function useBuilderState() {
  const [state, setState] = useState<BuilderState>(INITIAL_BUILDER_STATE)

  const setUseCase = useCallback(
    (id: string) => setState((s) => ({ ...s, useCase: id })),
    [],
  )
  const setAudience = useCallback(
    (v: string) => setState((s) => ({ ...s, audience: v })),
    [],
  )
  const setGoal = useCallback((id: string) => setState((s) => ({ ...s, goal: id })), [])

  const toggleImpression = useCallback((id: string) => {
    setState((s) => {
      const has = s.impressions.includes(id)
      if (has) return { ...s, impressions: s.impressions.filter((i) => i !== id) }
      if (s.impressions.length >= 3) return s // 最大3つ
      return { ...s, impressions: [...s.impressions, id] }
    })
  }, [])

  const setStyle = useCallback(
    (id: string, tuning: Record<string, string | number>) =>
      setState((s) => ({ ...s, styleId: id, tuning })),
    [],
  )
  const setOutputDepth = useCallback(
    (d: OutputDepth) => setState((s) => ({ ...s, outputDepth: d })),
    [],
  )
  const setDetailSettings = useCallback(
    (d: DetailSettings) => setState((s) => ({ ...s, detailSettings: d })),
    [],
  )

  return {
    state,
    setUseCase,
    setAudience,
    setGoal,
    toggleImpression,
    setStyle,
    setOutputDepth,
    setDetailSettings,
  }
}

export type BuilderApi = ReturnType<typeof useBuilderState>
