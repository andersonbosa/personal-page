'use client'

import ThemeToggle from '../atoms/ThemeToggle'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {

  return (
    <div className="navbar bg-base-100 flex justify-between ">
      <div>
        <button className="btn btn-ghost text-xl">
          ANB
        </button>
      </div>

      <div className='gap-x-4'>
        <ThemeToggle />
      </div>
    </div>)
}

export default Navbar
