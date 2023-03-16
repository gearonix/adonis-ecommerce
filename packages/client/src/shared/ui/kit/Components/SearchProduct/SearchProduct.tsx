import React, { FC } from 'react'
import s from './style.module.scss'
import Image from 'next/image'
import { Rating } from '@mui/material'
import Typo from 'shared/ui/kit/Typos/Typo/Typo'
import { BlueLink, InStock } from 'shared/ui/kit'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { SavedProps, SquareButton } from 'features/Saved'
import { useTranslation } from 'react-i18next'
import { Product } from 'widgets/Products'
import { CFC } from 'shared/types/components'
import { DefaultAssets } from 'shared/config/consts/assets'
import { BsCart } from 'react-icons/bs'
import { CartButtonProps, CartButtonUIProps } from 'features/ProductPage'
import { MdMessage } from 'shared/ui/icons'

export interface SearchProductProps {
  AddToSaved?: FC<SavedProps>,
  CartButton: FC<CartButtonProps>
  product: Product
}


export const SearchProduct: FC<SearchProductProps> = ({ AddToSaved, product, CartButton }) => {
  const { t } = useTranslation()
  return <div className={s.search_item}>
    <LinkToProduct productId={product.productId}>
      <Image src={product.images[0] || DefaultAssets.PRODUCT} alt={'Check it!'}
        width={190} height={190} priority={true}/>
    </LinkToProduct>
    <div className={s.info_block}>
      <Typo className={s.name}>
        {product.name} <InStock inStock={product.inStock} withoutTitle/></Typo>
      <h3 className={s.price}>${product.price}.00</h3>
      <div className={s.ratings}>
        <Rating name="size-small" readOnly
          defaultValue={product.rating} size="small"/>
        <h2><MdMessage size={'14px'}/> 154 Orders</h2>
      </div>

      <Typo>{product.description}</Typo>
      <LinkToProduct productId={product.productId}>
        <BlueLink>{t('View_details')}</BlueLink>
      </LinkToProduct>
      <div className={s.buttons}>
        {AddToSaved && <AddToSaved productId={product.productId} Component={SquareButton}/>}
        <CartButton productId={product.productId} Component={CartSquareButton}/>
      </div>
    </div>
  </div>
}

const CartSquareButton: FC<CartButtonUIProps> = ({ onAdd, isExists, onRemove }) => {
  return <SquareButton Icon={BsCart} isChecked={isExists}
    onClick={!isExists ? onAdd : onRemove}/>
}

export const LinkToProduct: CFC<{productId: number}> = ({ productId, children }) => {
  return <Link href={`${routes.SEARCH}/${productId}`} >
    {children}
  </Link>
}
