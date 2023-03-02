import {FC} from 'react'
import {ApiAnimation} from 'shared/ui/animations'
import s from './style.module.scss'
import {useTheme} from 'shared/lib/hooks/common'


const AnimatedTheme : FC = () => {
  const {theme} = useTheme()

  return <ApiAnimation className={s.animated} type={'opacityTwice'} subscriberValue={theme}>

  </ApiAnimation>
}


export default AnimatedTheme
