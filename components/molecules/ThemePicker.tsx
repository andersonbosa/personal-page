'use client'

import { Theme, useTheme } from '@/contexts/ThemeContext'
import { titleCase } from '@/utils'

interface ThemePickerProps {
  availableThemes: Array<string>
}

const ThemePicker: React.FC<ThemePickerProps> = ({ availableThemes }) => {
  const { theme, setTheme } = useTheme()

  const handlePickTheme = (optionTheme: Theme) => {
    setTheme(optionTheme)
  }

  const createThemeListOption = (optionTheme: string, index: number): React.ReactElement => {
    return (
      <li key={optionTheme} tabIndex={index + 1}>
        <input
          type="radio"
          name="theme-dropdown"
          className={'theme-controller btn btn-sm btn-block btn-ghost justify-start font-[sans-serif]'}
          aria-label={titleCase(optionTheme)}
          value={optionTheme}
          onClick={() => handlePickTheme(optionTheme as Theme)}
        />
      </li>
    )
  }

  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost " aria-label="Theme">
          Theme
          <svg className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" viewBox="0 0 2048 2048" width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" ><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>

        <ul className="menu menu-sm gap-1 dropdown-content z-[1] -- bg-base-200 text-base-content -- top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto -- rounded-box border border-white/5 shadow-2xl outline outline-1 outline-black/5">
          {availableThemes.map(createThemeListOption)}
        </ul>
      </div>
    </>
  )
}

export default ThemePicker
