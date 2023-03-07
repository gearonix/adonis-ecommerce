import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Product } from 'shared/types/slices'
import { Helpers } from 'shared/lib/helpers'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { DefaultAssets } from 'shared/config/consts/assets'

export const RecommendedItem: FC<{product: Product}> = ({ product }) => {
  const helpers = new Helpers()
  return <div className={s.item}>
    <Link href={`${routes.SEARCH}/${product.productId}`}>
      <h3 className={s.item_title}>{product.name}</h3>
      <span className={s.item_description}>{helpers.cropped(product.description)}</span>
      <div className={s.item_image}>
        <NextImage src={product.images[0]} def={DefaultAssets.PRODUCT}/>
      </div>
    </Link>
  </div>
}

