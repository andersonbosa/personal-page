'use client'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
}) => {
  return (
    <div role="button" className={`btn btn-ghost max-w-[70px] -- ${className}`}>
      {children}
    </div>
  )
}

export default Button
