import {FC} from 'react';
import {useColor} from 'shared/helpers/hooks';
import s from './style.module.scss'
import {ButtonProps} from "./types";

export const Button: FC<ButtonProps> = ({children, color = 'primary', h = '38px', w}) => {
    const {background, color: clr = 'white', border} = useColor(color)
    return <button className={s.button} color={color}
                   style={{
                       width: w, height: h, background, color: clr, border: border ?
                           `1px solid ${border}` : 'none'
                   }}>
        {children}
    </button>
}

