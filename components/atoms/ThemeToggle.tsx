'use client'

import { INITIAL_DARK_THEME_STATE, INITIAL_LIGHT_THEME_STATE } from '@/constants'
import { Theme, useTheme } from '@/contexts/ThemeContext'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'
import React from 'react'
import Button from './Button'

interface ThemeToggleProps { }

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme, isLightTheme } = useTheme()

  const toggleTheme = (someTheme: Theme, anotherTheme: Theme) => {
    const newTheme = theme === someTheme ? anotherTheme : someTheme
    setTheme(newTheme)
    // console.log('components/atoms/ThemeToggle.tsx',theme, someTheme, isLightTheme, newTheme)
  }

  const handleToggleTheme = () => {
    toggleTheme(INITIAL_LIGHT_THEME_STATE, INITIAL_DARK_THEME_STATE)
  }

  return (
    <label id="theme-toggler" className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" onChange={handleToggleTheme} />
      <Button><SunIcon swapState={isLightTheme} /></Button>
      <Button><MoonIcon swapState={!isLightTheme} /></Button>
    </label>
  )
}

export default ThemeToggle
