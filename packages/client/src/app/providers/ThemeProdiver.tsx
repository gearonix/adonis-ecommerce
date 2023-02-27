import {FC, ReactNode, useMemo} from 'react'
import ThemeContext from 'shared/config/contexts/ThemeContext'
import {useLocalStorage, useMuiTheme} from 'shared/lib/helpers/hooks/common'
import {LocalStorage, Theme} from 'shared/config/themes'
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles'


const ThemeProvider: FC<{ children: ReactNode }> = ({children}) => {
  const {value: theme, save: setTheme} = useLocalStorage(LocalStorage.THEME, Theme.LIGHT)
  const muiTheme = useMuiTheme(theme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return <ThemeContext.Provider value={defaultProps}>
    <MuiThemeProvider theme={muiTheme}>
      {children}
    </MuiThemeProvider>
  </ThemeContext.Provider>
}

export default ThemeProvider
