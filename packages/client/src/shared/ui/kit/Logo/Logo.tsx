import React, {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'

export const Logo: FC = () => {
  return <div className={s.logo}>
    <NextImage src={'/assets/logo.svg'}/>
  </div>
}

