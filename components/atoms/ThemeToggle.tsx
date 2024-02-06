'use client'

import { INITIAL_DARK_THEME_STATE, INITIAL_LIGHT_THEME_STATE } from '@/constants'
import { Theme, useTheme } from '@/contexts/ThemeContext'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'

interface ThemeToggleProps { }

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme, isLightTheme } = useTheme()

  const toggleTheme = (someTheme: Theme, anotherTheme: Theme) => {
    const newTheme = theme === someTheme ? anotherTheme : someTheme

    console.log( theme, someTheme, isLightTheme, newTheme )
    setTheme(newTheme)
  }

  const handleToggleTheme = () => {
    toggleTheme(INITIAL_LIGHT_THEME_STATE, INITIAL_DARK_THEME_STATE)
  }

  return (
    <div role="button" className="btn btn-ghost">
      <label className="swap swap-rotate scale-[0.60]">
        <input type="checkbox" className="theme-controller" onChange={handleToggleTheme} />
        <SunIcon swapState={isLightTheme} />
        <MoonIcon swapState={!isLightTheme} />
      </label>
    </div>
  )
}

export default ThemeToggle
