import { FC, useEffect } from 'react'
import { AppError } from 'entities/Others'
import { WithSpring } from 'shared/lib/components'
import s from './style.module.scss'
import { routes } from 'shared/config/routes'
import { useRouter } from 'next/router'


interface ErrorTemplateProps{
    errorInfo: string
}


const ErrorTemplate : FC<ErrorTemplateProps> = ({ errorInfo }) => {
  useEffect(() => {
    document.body.classList.add('error')
  }, [])

  const onRedirect = () => {
    window.location.href = routes.MAIN
  }

  return <div className={s.error_container}>
    <WithSpring type={'opacityScale'}>
      <AppError errorInfo={errorInfo} onRedirect={onRedirect}/>
    </WithSpring>
  </div>
}


export default ErrorTemplate
