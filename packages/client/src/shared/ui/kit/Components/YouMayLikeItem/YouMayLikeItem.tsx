import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'
import {Product} from 'shared/types/slices'

export const YouMayLikeItem: FC<{product: Product}> = ({product}) => {
  return <div className={s.item}>
    <div className={s.image_wrapper}>
      <NextImage src={product.images[0]}/>
    </div>
    <div className={s.info_block}>
      <h4>{product.name}</h4>
      <span>${product.price} - type: {product.type}</span>
    </div>
  </div>
}

