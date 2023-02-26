import {ButtonHTMLAttributes, forwardRef, ReactNode} from 'react'
import s from './style.module.scss'
import {ColorType} from '../../types'
import cn from 'classnames'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    color?: ColorType,
    w: number | string,
    h?: number | string
}


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({color = 'primary', w, h, children, onClick}, ref) => {
  return <button className={cn(s.button, s[color])} ref={ref} onClick={onClick} style={{width: w, height: h}}>
    {children}
  </button>
})

Button.displayName = 'Button'
