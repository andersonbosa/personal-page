'use client'

import { HTMLAttributes } from 'react'

interface AtomProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

function Atom({
  children,
  className,
  ...htmlAttributes

}: AtomProps): React.JSX.Element {
  return (
    <>
      <div className={className} {...htmlAttributes} >
        {children}
      </div>
    </>
  )
}

export default Atom
