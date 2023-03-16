import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Helpers } from 'shared/lib/helpers'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Product } from 'widgets/Products'

export const YouMayLikeItem: FC<{product: Product}> = ({ product }) => {
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

