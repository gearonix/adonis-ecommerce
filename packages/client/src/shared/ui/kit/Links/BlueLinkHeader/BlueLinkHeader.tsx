import { FC } from 'react'
import s from './style.module.scss'


interface Props{
  label: string,
  Icon: FC
}

export const BlueLinkHeader: FC<Props> = ({ label, Icon }) => {
  return <div className={s.header}>
    <h4><Icon/> {label}</h4>
  </div>
}

