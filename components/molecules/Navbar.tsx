'use client'

import ThemePicker from '../atoms/ThemePicker'
import ThemeToggle from '../atoms/ThemeToggle'


interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  /*** https://www.youtube.com/watch?v=B-MzDlbxHRw&t=38s
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?? "light"
  )

  useEffect(
    () => {
      localStorage.setItem("theme", theme)
      const localTheme = localStorage.getItem("theme") || theme
      document.querySelector("html")?.setAttribute("data-theme", localTheme)
    },
    [theme]
  )
  */

  return (
    <div className="navbar bg-primary text-primary-content flex justify-between ">
      <div>
        <button className="btn btn-ghost text-xl">
          ANB
        </button>
      </div>

      <div className='gap-x-4'>
        <ThemeToggle />
        <ThemePicker />
      </div>
    </div>)
}

export default Navbar
