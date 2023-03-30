import { useContext, useEffect } from 'react'
import ThemeContext from 'app/providers/Theme/ThemeContext'
import { Theme } from 'shared/config/consts/themes'
import { createTheme } from '@mui/material/styles'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const selectedTheme = theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(selectedTheme)
  }
  const isLight = theme === Theme.LIGHT

  useEffect(() => {
    document.body.style.backgroundColor = isLight ? '#F7FAFC' : '#242424'
  }, [isLight])


  return { theme, toggleTheme, isLight, setTheme }
}
export const useMuiTheme = (theme: Theme) => {
  return createTheme({
    palette: {
      mode: theme === Theme.LIGHT ? 'light' : 'dark'
    }
  })
}
