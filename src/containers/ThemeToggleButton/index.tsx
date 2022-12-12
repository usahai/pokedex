import React, { useCallback, useEffect, useState } from 'react'
import { Nullable } from 'definitions'
import { ReactComponent as Dark } from 'assets/dark.svg'
import { ReactComponent as Light } from 'assets/light.svg'

interface ThemeToggleButtonProps {}
type ThemeProps = Nullable<'light' | 'dark'>

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = () => {
  const [theme, setTheme] = useState<ThemeProps>(undefined)

  const updateDOM = useCallback(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    updateDOM()
  }, [updateDOM])

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [theme])

  const toggleMode = () => {
    if (localStorage.theme === undefined) {
      localStorage.theme = 'dark'
      setTheme('dark')
    }

    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark'
      setTheme('dark')
    } else {
      localStorage.theme = 'light'
      setTheme('light')
    }

    updateDOM()
  }

  return (
    <button
      className="border-2 border-black p-2 rounded-lg ease-in duration-75 hover:bg-gray-700 dark:border-white  dark:hover:bg-gray-100"
      onClick={toggleMode}
    >
      {theme === 'light' ? <Light /> : <Dark className="dark:color-white" />}
    </button>
  )
}

export default ThemeToggleButton
