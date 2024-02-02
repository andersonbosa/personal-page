'use client'

import { AVAIABLE_LANGUAGES, } from '@/constants'
import LanguagePicker from './LanguagePicker'
import ThemeToggle from '../atoms/ThemeToggle'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar bg-base-300 flex justify-between">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold btn btn-ghost">ANB</a>
      </div>
      <div className="flex justify-end flex-1 ">
        <div className="flex items-stretch">
          <div><ThemeToggle /></div>
          <div><LanguagePicker availableLanguages={AVAIABLE_LANGUAGES} /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
