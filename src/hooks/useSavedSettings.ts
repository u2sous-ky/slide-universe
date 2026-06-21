// 自分のセッティングのお気に入り（localStorage 永続化・バックエンド不要）
import { useCallback, useEffect, useState } from 'react'
import type { BuilderState, SavedSetting } from '../lib/types'

const KEY = 'su.favorites.settings'

function load(): SavedSetting[] {
  try {
    const raw = localStorage.getItem(KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? (arr as SavedSetting[]) : []
  } catch {
    return []
  }
}

function uid(): string {
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`
}

export function useSavedSettings() {
  const [items, setItems] = useState<SavedSetting[]>(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      /* プライベートモード等で localStorage 不可なときは黙って無視 */
    }
  }, [items])

  const add = useCallback((name: string, state: BuilderState) => {
    const item: SavedSetting = {
      id: uid(),
      name: name.trim() || '名称未設定',
      createdAt: Date.now(),
      // 参照ではなくスナップショットを保存（以降の編集で書き換わらないように）
      state: structuredClone(state),
    }
    setItems((cur) => [item, ...cur])
  }, [])

  const remove = useCallback((id: string) => {
    setItems((cur) => cur.filter((x) => x.id !== id))
  }, [])

  return { items, add, remove, count: items.length }
}
