import React, { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Assets } from 'shared/config/consts/assets'
import { useTheme } from 'shared/lib/hooks'


export const Logo: FC = () => {
  const { isLight } = useTheme()
  return <div className={s.logo}>
    <NextImage src={isLight ? Assets.LOGO_LIGHT : Assets.LOGO_DARK}
      className={s.desktop}/>
    <NextImage src={Assets.LOGO_MOBILE} className={s.mobile}/>
  </div>
}

