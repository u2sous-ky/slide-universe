// プリセットのお気に入り（localStorage 永続化・バックエンド不要）
import { useCallback, useEffect, useState } from 'react'

const KEY = 'su.favorites.presets'

function load(): string[] {
  try {
    const raw = localStorage.getItem(KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? arr.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [ids, setIds] = useState<string[]>(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids))
    } catch {
      /* プライベートモード等で localStorage 不可なときは黙って無視 */
    }
  }, [ids])

  const isFavorite = useCallback((id: string) => ids.includes(id), [ids])
  const toggle = useCallback((id: string) => {
    setIds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))
  }, [])

  return { favorites: ids, isFavorite, toggle, count: ids.length }
}
