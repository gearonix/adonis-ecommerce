import { WithSpring } from 'shared/lib/components'
import s from 'shared/ui/kit/Loaders/DefaultPreloader/style.module.scss'
import { FC } from 'react'

interface Props{
    Icon: FC,
    title: string
}

export const DefaultPreloader: FC<Props> = ({ Icon, title }) => {
  return <WithSpring>
    <div className={s.no_products}>
      <h2>There is nothing in the {title}</h2>
      <Icon/>
    </div>
  </WithSpring>
}
