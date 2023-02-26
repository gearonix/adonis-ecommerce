import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'
import {Product} from 'shared/types/slices'
import {Helpers} from 'shared/lib/helpers/others'
import Link from 'next/link'
import {routes} from 'shared/config/routes'
import {DefaultAssets} from 'shared/config/assets'

export const YouMayLikeItem: FC<{product: Product}> = ({product}) => {
  const helpers = new Helpers()
  return <Link href={`${routes.SEARCH}/${product.productId}`} className={s.item}>
    <div className={s.image_wrapper}>
      <NextImage src={product.images[0]} def={DefaultAssets.PRODUCT}/>
    </div>
    <div className={s.info_block}>
      <h4>{product.name}</h4>
      <span>${product.price} - {helpers.cropped(product.description, 15)}</span>
    </div>
  </Link>
}

