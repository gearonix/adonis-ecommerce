import React, { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Assets } from 'shared/config/consts/assets'


export const Logo: FC = () => {
  return <div className={s.logo}>
    <NextImage src={Assets.LOGO}/>
  </div>
}

