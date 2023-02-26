import {createContext} from 'react'
import {Theme} from 'shared/types/appTypes'


export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (value: Theme) => void;
}


const ThemeContext = createContext<ThemeContextProps>({})


export default ThemeContext
