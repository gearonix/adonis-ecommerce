import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'
import {Product} from 'shared/types/slices'
import {Helpers} from 'shared/lib/helpers/others'

export const RecommendedItem: FC<{product: Product}> = ({product}) => {
  const helpers = new Helpers()
  return <div className={s.item}>
    <h3 className={s.item_title}>{product.name}</h3>
    <span className={s.item_description}>{helpers.cropped(product.description)}</span>
    <div className={s.item_image}>
      <NextImage src={product.images[0]}/>
    </div>
  </div>
}

