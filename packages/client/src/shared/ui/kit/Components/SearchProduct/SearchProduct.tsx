import React, {FC} from 'react'
import s from './style.module.scss'
import Image from 'next/image'
import {Rating} from '@mui/material'
import Typo from 'shared/ui/kit/Typos/Typo/Typo'
import {BlueLink} from 'shared/ui/kit'
import {Product} from 'shared/types/slices'
import Link from 'next/link'
import {routes} from 'shared/config/routes'
import {SavedProps, SearchSaved} from 'features/Saved'

export interface SearchProductProps {
  AddToSaved?: FC<SavedProps>,
  CartButton: FC<{productId?: number}>
  product: Product
}


export const SearchProduct: FC<SearchProductProps> = ({AddToSaved, product, CartButton}) => {
  return <div className={s.search_item}>
    <Image src={product.images[0] || 'assets/default_product.png'} alt={'Check it!'}
      width={190} height={190} priority={true}/>
    <div className={s.info_block}>
      <Typo>{product.name}</Typo>
      <h3 className={s.price}>${product.price}.00</h3>
      <Rating name="size-small" readOnly
        defaultValue={product.rating} size="small"/>
      <Typo>{product.description}</Typo>
      <Link href={`${routes.SEARCH}/${product.productId}`} >
        <BlueLink>View details</BlueLink>
      </Link>
      <div style={{width: '200px'}}>
        <CartButton productId={product.productId}/>
      </div>
      {AddToSaved && <AddToSaved productId={product.productId} Component={SearchSaved}/>}

    </div>
  </div>
}

