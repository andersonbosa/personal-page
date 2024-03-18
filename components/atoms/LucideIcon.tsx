import { icons } from 'lucide-react'

export type LucideIconType = keyof typeof icons

interface LucideIconProps {
  name: LucideIconType /* dark side of typescript 😅 */
  className?: string
  color?: string
  size?: number
}

const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  className = 'text-black',
  size = 32
}) => {
  const NamedLucideIcon = icons[name]
  if (!NamedLucideIcon) {
    throw new Error('Some problem occurred during rendering of: lucideicon.tsx')
  }

  return (
    <>
      <span className={className}>
        <NamedLucideIcon size={size} />
      </span>
    </>
  )
}

export default LucideIcon
