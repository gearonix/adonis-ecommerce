import { ButtonHTMLAttributes, ChangeEvent, FC } from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import { Button } from 'shared/ui/kit'
import { useTheme } from 'shared/lib/hooks'


interface UploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    handleChange: (file: File) => void,
    width?: number
}


export const UploadButton: FC<UploadButtonProps> = ({ className, children, handleChange,
  disabled, width = 150 }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length === 0) return
    const file = e?.target?.files?.[0]

    handleChange(file as File)
  }
  return <Button className={cn(s.UploadButton, className, { [s.disabled]: disabled })} w={width}>
    {children}
    {!disabled && <input type={'file'} onChange={onChange}/>}
  </Button>
}


