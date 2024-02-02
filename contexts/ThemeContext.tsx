'use client'

import { ProviderProps } from '@/types'
import { createContext, useContext, useEffect, useState } from 'react'

// Constants for localStorage and HTML attribute keys
const LOCAL_STORAGE_KEY = 'theme'
const HTML_THEME_KEY = 'data-theme'

// Type definition for possible themes
export type Theme = "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate" | "synthwave" | "retro" | "cyberpunk" | "valentine" | "halloween" | "garden" | "forest" | "aqua" | "lofi" | "pastel" | "fantasy" | "wireframe" | "black" | "luxury" | "dracula" | "cmyk" | "autumn" | "business" | "acid" | "lemonade" | "night" | "coffee" | "winter" | "dim" | "nord" | "sunset"

// Type definition for the structure of the theme context
interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Type definition for a context that may contain ThemeContextProps or be undefined
type PerhapsThemeContextProps = ThemeContextProps | undefined

// Create a React context for managing theme-related information
const ThemeContext = createContext<PerhapsThemeContextProps>(undefined)

// Props for the ThemeProvider component
interface ThemeProviderProps extends ProviderProps { }

// React component for managing the theme state and providing it through context
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Default theme when no theme is stored
  const INITIAL_STATE: Theme = 'light'

  // State hook to manage the current theme
  const [theme, setTheme] = useState<Theme>(INITIAL_STATE)

  // Function to update the theme state, set the theme on the HTML element, and store it in local storage
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)

    // Updates the location only on the customer side
    window?.document.querySelector('html')?.setAttribute(HTML_THEME_KEY, newTheme)
    window?.localStorage.setItem(LOCAL_STORAGE_KEY, newTheme)
  }

  // Effect hook to check for a stored theme when the component mounts and set it if available
  useEffect(
    () => {
      const getStoredTheme = () => {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY)
        return storedTheme ? (storedTheme as Theme) : INITIAL_STATE
      }

      handleSetTheme(getStoredTheme())
    },
    []
  )


  // Render the ThemeProvider component with its children wrapped by the ThemeContext.Provider
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
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
