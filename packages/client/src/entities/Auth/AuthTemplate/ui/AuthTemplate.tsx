import {FC, ReactNode} from 'react'
import s from './style.module.scss'
import Link from 'next/link'
import {getUIText} from '../helpers'
import cn from 'classnames'
import GoogleButton from 'widgets/Login/ui/GoogleButton'
import {GoogleButtonProps} from 'widgets/Login/types'
import {UserRoles} from 'app/config/globals'

interface AuthTemplateProps {
    children: ReactNode,
    submit: any,
    GoogleButton: FC<GoogleButtonProps>,
    role?: UserRoles
}

const RegTemplate: FC<AuthTemplateProps> = ({children, submit, role}) => {
  const mode = !!role ? 'signup' : 'login'
  const {title, linkHref, linkText, blueLinkText} = getUIText(mode)

  return <form className={s.login_form}>
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      {children}
      <button className={cn('primary_button', s.login_button)} onClick={submit}>{title}</button>
      <div className={s.grey_line}></div>
      <GoogleButton role={role}/>
      <h4 className={s.account_link}>
        {linkText} <Link className="hover_link" href={linkHref}>  {blueLinkText} </Link></h4>
    </div>
  </form>
}

export default RegTemplate
