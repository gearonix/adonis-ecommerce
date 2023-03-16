import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Product } from 'widgets/Products'

export const RecommendedItemTall: FC<{product: Product}> = ({ product }) => {
  return <Link href={`${routes.SEARCH}/${product.productId}`} className={s.item}>
    <div className={s.image_wrapper}>
      <NextImage src={product.images[0]} def={DefaultAssets.PRODUCT}/>
    </div>
    <h3 className={s.price}>${product.price}</h3>
    <span className={s.item_description}>
      {product.description}
    </span> </Link>
}

