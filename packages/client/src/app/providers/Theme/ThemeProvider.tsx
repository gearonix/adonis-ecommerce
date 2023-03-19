import { FC, ReactNode, useMemo } from 'react'
import ThemeContext from 'app/providers/Theme/ThemeContext'
import { Theme } from 'shared/config/consts/themes'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useMuiTheme } from 'shared/lib/hooks/useTheme'
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage'
import { LocalStorage } from 'shared/config/consts/others'
import { CFC } from 'shared/types/components'

interface Props{
  defaultTheme?: Theme
}


const ThemeProvider: CFC<Props> = ({ children, defaultTheme = Theme.LIGHT }) => {
  const { value: theme, save: setTheme } = useLocalStorage(LocalStorage.THEME, defaultTheme)
  const muiTheme = useMuiTheme(theme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return <ThemeContext.Provider value={defaultProps}>
    <MuiThemeProvider theme={muiTheme}>
      {children}
    </MuiThemeProvider>
  </ThemeContext.Provider>
}

export default ThemeProvider
