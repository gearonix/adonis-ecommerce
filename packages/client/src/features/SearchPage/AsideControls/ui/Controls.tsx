import {FC} from 'react'
import s from './style.module.scss'
import {BlueLink} from 'shared/ui/kit'
import Typo from 'shared/ui/kit/Typos/Typo/Typo'
import {ControlsProps} from 'shared/ui/mui/types'

export interface CategoryProps {
  items: string[],
  title: string,
  Component: FC<ControlsProps>
}


const Controls: FC<CategoryProps> = ({title, Component, items}) => {
  return <div className={s.category}>
    <Typo>{title}</Typo>
    {items.map((item, idx) => <Component title={title} idx={idx} key={idx}/>)}
    <BlueLink>Disable all</BlueLink>
  </div>
}

export default Controls
