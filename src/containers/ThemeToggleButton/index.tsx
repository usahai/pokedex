import React, { useCallback, useEffect, useState } from 'react'
import { Nullable } from 'definitions'
import { ReactComponent as Dark } from 'assets/dark.svg'
import { ReactComponent as Light } from 'assets/light.svg'
import Button from 'containers/Button'

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
    <Button onClick={toggleMode}>
      {theme === 'light' ? <Light /> : <Dark className="dark:color-white" />}
    </Button>
  )
}

export default ThemeToggleButton
