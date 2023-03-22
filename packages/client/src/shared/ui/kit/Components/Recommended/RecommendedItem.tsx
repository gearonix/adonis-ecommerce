import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Helpers } from 'shared/lib/helpers'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Product } from 'widgets/Products'

export const RecommendedItem: FC<{product: Product}> = ({ product }) => {
  const helpers = new Helpers()
  return <div className={s.item}>
    <Link href={`${routes.SEARCH}/${product.productId}`}>
      <div className={s.item_image}>
        <NextImage src={product.images[0]} def={DefaultAssets.PRODUCT}/>
      </div>
      <h3 className={s.item_title}>{product.name}</h3>
      <span className={s.item_description}>{helpers.cropped(product.description)}</span>
    </Link>
  </div>
}

