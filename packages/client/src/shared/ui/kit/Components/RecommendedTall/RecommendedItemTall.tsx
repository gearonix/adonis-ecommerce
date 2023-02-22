import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'
import {Product} from 'shared/types/slices'

export const RecommendedItemTall: FC<{product: Product}> = ({product}) => {
  return <div className={s.item}>
    <div className={s.image_wrapper}>
      <NextImage src={product.images[0]}/>
    </div>
    <h3 className={s.price}>${product.price}</h3>
    <span className={s.item_description}>
      {product.description}
    </span>
  </div>
}

