export type ColorType = 'red' | 'green' | 'primary' | 'orange' | 'outlined' | 'blueBordered'

export interface HexColorsI {
    [key: string]: {
        background: string,
        hover: string,
        color?: string,
        border?: string
    }

}
