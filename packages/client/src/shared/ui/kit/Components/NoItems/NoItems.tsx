import { FC } from 'react'
import { Displayed } from 'shared/lib/components'
import s from './style.module.scss'

interface NoItemsProps{
    condition: any,
    title: string,
    Icon: FC
}

export const NoItems: FC<NoItemsProps> = ({ title, Icon, condition }) => {
  return <Displayed condition={Boolean(condition)}>
    <div className={s.no_products}>
      <h2>There is nothing in the {title}</h2>
      <Icon/>
    </div>
  </Displayed>
}
