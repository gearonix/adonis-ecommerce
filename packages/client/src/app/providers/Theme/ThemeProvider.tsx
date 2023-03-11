import { FC, ReactNode, useMemo } from 'react'
import ThemeContext from 'app/providers/Theme/ThemeContext'
import { LocalStorage, Theme } from 'shared/config/consts/themes'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useMuiTheme } from 'shared/lib/hooks/useTheme'
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage'


const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { value: theme, save: setTheme } = useLocalStorage(LocalStorage.THEME, Theme.LIGHT)
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
