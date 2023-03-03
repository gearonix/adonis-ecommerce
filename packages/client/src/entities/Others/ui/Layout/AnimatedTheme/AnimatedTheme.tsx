import { FC } from 'react'
import s from './style.module.scss'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { ApiAnimation } from 'shared/lib/components'


const AnimatedTheme : FC = () => {
  const { theme } = useTheme()

  return <ApiAnimation className={s.animated} type={'opacityTwice'} subscriberValue={theme}>

  </ApiAnimation>
}


export default AnimatedTheme
