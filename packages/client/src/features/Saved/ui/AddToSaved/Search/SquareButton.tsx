import React, { FC } from 'react'
import s from './style.module.scss'
import { FiHeart } from 'shared/ui/icons'
import { ApiAnimation } from 'shared/lib/components'
import cn from 'classnames'
import { SquareButtonProps } from 'features/Saved'


const SquareButton: FC<SquareButtonProps> = (props) => {
  const { onClick, isChecked, Icon = FiHeart } = props
  return <ApiAnimation className={cn(s.heart, { [s.saved]: isChecked })}
    type={'reverseScale'} onClick={onClick}>
    <Icon/>
  </ApiAnimation>
}

export default SquareButton
