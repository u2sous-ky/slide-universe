// Material Symbols Outlined のラッパー（操作アイコンはこれに統一 / デザイン §10）

interface IconProps {
  name: string
  filled?: boolean
  size?: number
  className?: string
}

export function Icon({ name, filled = false, size = 20, className }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ''}`}
      style={{
        fontSize: size,
        // 選択中アイコンのみ FILL 1 を許可（コーディング §3）
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
