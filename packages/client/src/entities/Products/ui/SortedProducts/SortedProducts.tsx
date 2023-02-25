import {FC} from 'react'
import s from './style.module.scss'
import {Button, RecommendedItem} from 'shared/ui/kit'
import Link from 'next/link'
import {routes} from 'shared/config/routes'
import {RecommendedItemProps} from 'widgets/Products'


const SortedProducts: FC<RecommendedItemProps> = ({type, items}) => {
  return <div className={s.recommended}>
    <div className={s.image_block}>
      <div className={s.title}>{type}</div>
      <Link href={{
        pathname: routes.SEARCH,
        query: {type},
      }}>
        <Button w={'119px'} color={'outlined'}>Source now</Button>
      </Link>
    </div>
    <div className={s.recommended_items}>
      {items.map((product) => <RecommendedItem product={product} key={product.productId}/>)}
    </div>
  </div>
}
export default SortedProducts
