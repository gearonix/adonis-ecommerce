import { useContext } from 'react'
import ThemeContext from 'app/providers/Theme/ThemeContext'
import { Theme } from 'shared/config/themes'
import { createTheme } from '@mui/material/styles'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const selectedTheme = theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(selectedTheme)
  }


  return { theme, toggleTheme, isLight: theme === Theme.LIGHT }
}
export const useMuiTheme = (theme: Theme) => {
  return createTheme({
    palette: {
      mode: theme === Theme.LIGHT ? 'light' : 'dark'
    }
  })
}
