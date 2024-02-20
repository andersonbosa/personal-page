import { icons } from 'lucide-react'

export type LucideIconType = keyof typeof icons

interface LucideIconProps {
  name: LucideIconType /* dark side of typescript 😅 */
  additionalClassName?: string
  color?: string
  size?: number
}

const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  additionalClassName = 'text-black',
  size = 32
}) => {
  const NamedLucideIcon = icons[name]
  if (!NamedLucideIcon) {
    throw new Error('Some problem occurred during rendering of: lucideicon.tsx')
  }

  return (
    <>
      <span className={additionalClassName}>
        <NamedLucideIcon size={size} />
      </span>
    </>
  )
}

export default LucideIcon
