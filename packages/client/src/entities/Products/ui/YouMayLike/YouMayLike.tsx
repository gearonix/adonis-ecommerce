import { FC } from 'react'
import s from './style.module.scss'
import { YouMayLikeItem } from 'shared/ui/kit'
import { RecommendedItemProps } from 'widgets/Products'
import { Ternary } from 'shared/lib/components'
import { YouMayLikePreloader } from 'shared/ui/material/components/Loaders/YouMayLikePreloader'


const YouMayLike: FC<RecommendedItemProps> = ({ items }) => {
  return <article className={s.you_may_like}>
    <h4 className={s.heading}>You may like</h4>
    <Ternary where={items.length}>
      <>
        {items.slice(0, 5).map((product) => {
          return <YouMayLikeItem key={product.productId} product={product}/>
        })}
      </>
      <YouMayLikePreloader/>
    </Ternary>
  </article>
}

export default YouMayLike
