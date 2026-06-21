// ブランド前提（brand.md）の永続化（localStorage・バックエンド不要）。
// 全生成に共通で効く「判断基準」なので、お気に入り設定とは別に1つだけ持つ。
import { useCallback, useEffect, useState } from 'react'
import { BRAND_STORAGE_KEY, EMPTY_BRAND, type BrandProfile } from '../lib/types'

function load(): BrandProfile {
  try {
    const raw = localStorage.getItem(BRAND_STORAGE_KEY)
    if (!raw) return { ...EMPTY_BRAND }
    const obj = JSON.parse(raw)
    // 旧バージョンに項目が増えても壊れないよう、既定で穴埋めする
    return { ...EMPTY_BRAND, ...(obj && typeof obj === 'object' ? obj : {}) }
  } catch {
    return { ...EMPTY_BRAND }
  }
}

export function useBrandProfile() {
  const [brand, setBrandState] = useState<BrandProfile>(load)

  useEffect(() => {
    try {
      localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(brand))
    } catch {
      /* プライベートモード等で localStorage 不可なときは黙って無視 */
    }
  }, [brand])

  const setBrand = useCallback((next: BrandProfile) => setBrandState(next), [])
  const clearBrand = useCallback(() => setBrandState({ ...EMPTY_BRAND }), [])

  return { brand, setBrand, clearBrand }
}
