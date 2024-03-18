'use client'

import appConfiguration from '@/config'
import { INITIAL_LIGHT_THEME_STATE } from '@/constants'
import { ProviderProps } from '@/types'
import { createContext, useContext, useEffect, useState } from 'react'

// Constants for localStorage and HTML attribute keys
const LOCAL_STORAGE_KEY = 'theme'
const HTML_THEME_KEY = 'data-theme'

const INITIAL_THEME_STATE: Theme = INITIAL_LIGHT_THEME_STATE

// Type definition for possible themes
export type Theme = 'system' | 'light' | 'dark' | 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave' | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' | 'forest' | 'aqua' | 'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' | 'autumn' | 'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | 'winter' | 'dim' | 'nord' | 'sunset'

// Type definition for the structure of the theme context
interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  isLightTheme: boolean
}

// Type definition for a context that may contain ThemeContextProps or be undefined
type PerhapsThemeContextProps = ThemeContextProps | undefined

// Create a React context for managing theme-related information
const ThemeContext = createContext<PerhapsThemeContextProps>(undefined)

// Props for the ThemeProvider component
interface ThemeProviderProps extends ProviderProps { }

// React component for managing the theme state and providing it through context
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // State hook to manage the current theme
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME_STATE)
  const [isLightTheme, setIsLightTheme] = useState<boolean>(theme === INITIAL_LIGHT_THEME_STATE)

  // Function to update the theme state, set the theme on the HTML element, and store it in local storage
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    setIsLightTheme(newTheme === INITIAL_LIGHT_THEME_STATE)

    // Updates the location only on the customer side
    window?.document.querySelector('html')?.setAttribute(HTML_THEME_KEY, newTheme)
    // window?.localStorage.setItem(LOCAL_STORAGE_KEY, newTheme)
    // console.log('contexts/ThemeContext.tsx#handleSetTheme', theme,  isLightTheme, newTheme )
  }

  // Effect hook to check for a stored theme when the component mounts and set it if available
  // useEffect(
  //   () => {
  //     const getStoredTheme = () => {
  //       const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY)
  //       return storedTheme ? (storedTheme as Theme) : INITIAL_THEME_STATE
  //     }

  //     const storedTheme = getStoredTheme()

  //     if (storedTheme === 'system') {
  //       /**
  //        * @see note
  //        * It is not necessary to manually change the themebecause the framework
  //        * already takes care of this when we use the "system" class.
  //        */
  //       // const isDarkModePrefered = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  //       // if (isDarkModePrefered) {
  //       //   return handleSetTheme(INITIAL_DARK_THEME_STATE)
  //       // } else {
  //       //   return handleSetTheme(INITIAL_LIGHT_THEME_STATE)
  //       // }
  //       return
  //     }

  //     // console.log('contexts/ThemeContext.tsx#handleSetTheme', theme, isLightTheme, storedTheme )

  //     handleSetTheme(storedTheme)
  //   },
  //   []
  // )

  // Effect hook to define initial theme based on app preference
  useEffect(
    () => {
      handleSetTheme(
        appConfiguration.themes.options[
          appConfiguration.themes.initialMode
        ]
      )
    },
    []
  )

  // Render the ThemeProvider component with its children wrapped by the ThemeContext.Provider
  return (
    <ThemeContext.Provider value={{
      theme,
      isLightTheme,
      setTheme: handleSetTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to conveniently access the theme context
const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.')
  }
  return context
}

// Export the ThemeProvider component and the useTheme hook for use in other parts of the application
export { ThemeProvider, useTheme }
