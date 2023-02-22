import s from './style.module.scss'
import {ContainerTitle, RecommendedItemTall} from 'shared/ui/kit'
import {FC} from 'react'
import {Product} from 'shared/types/slices'


const RecommendedItems: FC<{items: Product[]}> = ({items}) => {
  return items.length > 0 ? <article className={s.recommended_items}>
    <ContainerTitle>Recommended items</ContainerTitle>
    <div className={s.items_block}>
      {items.slice(0, 8).map((product) =>
        <RecommendedItemTall key={product.productId} product={product}/>)}
    </div>
  </article> : null
}

export default RecommendedItems
