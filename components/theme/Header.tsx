'use client'

interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

function Header(props: HeaderProps): React.JSX.Element {
  return (
    <>
      <h1 className={`text-4xl font-bold -- text-base-content -- mb-4 -- ${props.className}`}>
        {props.children}
      </h1>
    </>
  )
}

export default Header
