import { FC } from 'react'
import s from './style.module.scss'
import { Button, RecommendedItem } from 'shared/ui/kit'
import { routes } from 'shared/config/consts/routes'
import { productsActions, RecommendedItemProps } from 'widgets/Products'
import { useDispatch } from 'shared/types/redux'
import { useRouter } from 'next/router'
import { RecommendedPreloader } from 'shared/ui/material'
import { backgroundImage } from 'shared/lib/helpers'
import { ProductTypesAssets } from 'shared/config/consts/assets'


const SortedProducts: FC<RecommendedItemProps> = ({ type = 'Electronics', items }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const onSearch = () => {
    dispatch(productsActions.changeFilter({ type }))
    router.push(routes.SEARCH)
  }

  return <div className={s.recommended}>
    <div className={s.image_block}
      style={backgroundImage(ProductTypesAssets[type])}>
      <div className={s.title}>{type}</div>

      <Button w={'119px'} color={'outlined'} onClick={onSearch}>Source now</Button>
    </div>
    <div className={s.recommended_items}>
      {items.length ? items.slice(0, 8).map((product, idx) => <RecommendedItem product={product}
        key={`${product.productId}_${idx}`}/>) : <RecommendedPreloader/>}
    </div>
  </div>
}
export default SortedProducts
