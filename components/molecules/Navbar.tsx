'use client'

import { AVAIABLE_LANGUAGES, } from '@/constants'
import LanguagePicker from './LanguagePicker'
import ThemeToggle from '../atoms/ThemeToggle'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar p-[7px] -- flex justify-between min-h-[var(--navbar-height)] -- bg-base-100">
      <Button>
        <div className="px-2 lg:flex-none">
          <a href='/' className="text-lg font-bold">ANB</a>
        </div>
      </Button>

      <div className="flex justify-end ">
        <div className="flex items-stretch">
          <ThemeToggle />
          <LanguagePicker availableLanguages={AVAIABLE_LANGUAGES} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
