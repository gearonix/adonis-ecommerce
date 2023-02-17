import {FC} from 'react'
import s from './style.module.scss'

export interface PrimarySelectProps {
  values: string[]
}


export const PrimarySelect: FC<PrimarySelectProps> = ({values}) => {
  return <select className={s.primary_select}>
    {values.map((i) => {
      return <option key={i}>{i}</option>
    })}
  </select>
}

