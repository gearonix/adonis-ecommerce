import React, { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Assets } from 'shared/config/consts/assets'
import { useTheme } from 'shared/lib/hooks'
import { ApiAnimation } from 'shared/lib/components'
import { publicAssets } from 'shared/lib/helpers'


export const Logo: FC = () => {
  const { isLight } = useTheme()
  return <ApiAnimation className={s.logo} type={'increaseSize'}>
    <NextImage src={publicAssets(isLight ? Assets.LOGO_LIGHT : Assets.LOGO_DARK)}
      className={s.desktop}/>
    <NextImage src={publicAssets(Assets.LOGO_MOBILE)} className={s.mobile}/>
  </ApiAnimation>
}

