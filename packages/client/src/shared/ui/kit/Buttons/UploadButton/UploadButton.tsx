import {ButtonHTMLAttributes, ChangeEvent, FC} from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import {withFormData} from 'shared/lib/helpers/others'
import {UploadProperties} from 'app/config/globals'

interface UploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    handleChange: (formData: FormData) => void,
    mode : UploadProperties
}


export const UploadButton: FC<UploadButtonProps> = ({className, children, handleChange, mode}) => {
  const createFormData = withFormData(mode)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = createFormData(e)
    if (!formData) return
    handleChange(formData)
  }

  return <button className={cn(s.UploadButton, className)}>
    {children}
    <input type={'file'} onChange={onChange}/>
  </button>
}


