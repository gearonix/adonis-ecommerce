import { createContext } from 'react'
import { Theme } from 'shared/config/consts/themes'


export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (value: Theme) => void;
}


const ThemeContext = createContext<ThemeContextProps>({})


export default ThemeContext
