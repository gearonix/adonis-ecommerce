import s from './../About/style.module.scss'
import { AiOutlineGithub } from 'shared/ui/icons'
import { Button, NextImage } from 'shared/ui/kit'
import { FC } from 'react'
import { Assets } from 'shared/config/assets'

interface AppErrorProps{
    errorInfo: string,
    onRedirect: () => void
}

const AppError: FC<AppErrorProps> = ({ errorInfo, onRedirect }) => {
  return <div className={s.error_container}>
    <h1 className={s.title}>Seems like something went wrong :(</h1>
    <p className={s.text}>If you see this page, something went wrong.
        Please return to the main page.
        If you still have this error, please wait and come back later!</p>
    <div className={s.github_icon}>
      <AiOutlineGithub/>
    </div>
    <div className={s.image_wrapper}>
      <NextImage src={Assets.APP_ERROR}/>
    </div>
    <button onClick={onRedirect}>Return to the main page</button>
  </div>
}

export default AppError
