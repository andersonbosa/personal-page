'use client'

import React, { ReactElement } from 'react'

interface DropdownProps {
  buttonContent: ReactElement
  menuContent: ReactElement
  additionalClassName: string
}

const Dropdown: React.FC<DropdownProps> = (
  { buttonContent, menuContent, additionalClassName }
) => {
  const classNames = `dropdown -- ${additionalClassName}`
  return (
    <div className={classNames}>
      <div tabIndex={0} role="button">
        {buttonContent}
      </div>
      <ul className="menu menu-sm gap-1 dropdown-content z-[1] -- bg-base-200 text-base-content -- top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto -- rounded-box border border-white/5 shadow-2xl outline outline-1 outline-black/5">
        {menuContent}
      </ul>
    </div>
  )
}

export default Dropdown
