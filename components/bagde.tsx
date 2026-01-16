type BadgePosition = "top-right" | "top-left" | "bottom-right" | "bottom-left"

type BadgeProps = {
  children: React.ReactNode
  position?: BadgePosition
  offset?: number // en pixels, distance depuis le bord
  className?: string
}

export function Badge({
  children,
  position = "top-right",
    className = "",
}: BadgeProps) {
  // Calcul des classes Tailwind selon la position
  const positionClasses = {
    "top-right": `top-0 right-0`,
    "top-left": `top-0 left-0`,
    "bottom-right": `bottom-0 right-0`,
    "bottom-left": `bottom-0 left-0`,
  }


  return (
    <div
      className={`
        absolute
        ${positionClasses[position]}
        px-2 py-1
        ${className}
      `}
    >
      {children}
    </div>
  )
}
