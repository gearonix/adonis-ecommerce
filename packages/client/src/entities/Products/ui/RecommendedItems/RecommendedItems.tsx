import s from './style.module.scss'
import { ContainerTitle, RecommendedItemTall } from 'shared/ui/kit'
import { FC } from 'react'
import { RecommendedItemProps } from 'widgets/Products'
import {Ternary } from 'shared/lib/components'
import { GridPreloader } from 'shared/ui/material'


const RecommendedItems: FC<RecommendedItemProps> = ({ items }) => {
  return <article className={s.recommended_items}>
    <ContainerTitle>Recommended items</ContainerTitle>
    <div className={s.items_block}>
      <Ternary where={items.length}>
        <>
          {items.slice(0, 10).map((product) =>
            <RecommendedItemTall key={product.productId} product={product}/>)}
        </>
        <>
          <GridPreloader/>
        </>
      </Ternary>
    </div>
  </article>
}

export default RecommendedItems
