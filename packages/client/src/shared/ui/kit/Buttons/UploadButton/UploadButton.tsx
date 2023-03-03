import { ButtonHTMLAttributes, ChangeEvent, FC } from 'react'
import s from './style.module.scss'
import cn from 'classnames'


interface UploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    handleChange: (file: File) => void,
}


export const UploadButton: FC<UploadButtonProps> = ({ className, children, handleChange, disabled }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length === 0) return
    const file = e?.target?.files?.[0]

    handleChange(file as File)
  }

  return <button className={cn(s.UploadButton, className)}>
    {children}
    {!disabled && <input type={'file'} onChange={onChange}/>}

  </button>
}


