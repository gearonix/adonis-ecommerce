import {forwardRef} from 'react';
import {useColor} from 'shared/helpers/hooks';
import s from './style.module.scss'
import {ButtonProps} from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({color = 'primary', w, h, children}, ref) => {
    const {background, color: clr = 'white', border} = useColor(color)
    return <button className={s.button} color={color} ref={ref}
                   style={{
                       width: w, height: h, background, color: clr, border: border ?
                           `1px solid ${border}` : 'none'
                   }}>
        {children}
    </button>
})

Button.displayName = 'Button'
