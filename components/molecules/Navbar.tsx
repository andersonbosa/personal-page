'use client'

import LanguagePicker from '../atoms/LanguagePicker'
import ThemeToggle from '../atoms/ThemeToggle'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {

  /* return (
    <div className="navbar bg-base-100 flex justify-between ">
      <div>
        <button className="btn btn-ghost text-xl">
          ANB
        </button>
      </div>

      <div>
        <ThemeToggle />
        <LanguagePicker />
      </div>
    </div>
    ) */

  return (
    <div className="navbar bg-base-300 flex justify-between">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold btn btn-ghost">ANB</a>
      </div>
      <div className="flex justify-end flex-1 ">
        <div className="flex items-stretch">
          <div><ThemeToggle /></div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button"><LanguagePicker /></div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
