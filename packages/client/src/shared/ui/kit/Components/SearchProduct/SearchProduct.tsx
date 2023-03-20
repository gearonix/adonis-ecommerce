import React, { FC } from 'react'
import s from './style.module.scss'
import { Rating } from '@mui/material'
import Typo from 'shared/ui/kit/Typos/Typo/Typo'
import { BlueLink, InStock, NextImage } from 'shared/ui/kit'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { SavedProps, SquareButton } from 'features/Saved'
import { useTranslation } from 'react-i18next'
import { Product } from 'widgets/Products'
import { CFC } from 'shared/types/components'
import { DefaultAssets } from 'shared/config/consts/assets'
import { BsCart } from 'react-icons/bs'
import { CartButtonProps, CartButtonUIProps } from 'features/ProductPage'
import { FiHeart } from 'shared/ui/icons'
import { Helpers } from 'shared/lib/helpers'
import cn from 'classnames'

export interface SearchProductProps {
  AddToSaved?: FC<SavedProps>,
  CartButton: FC<CartButtonProps>
  product: Product,
  isTransformed: boolean
}


export const SearchProduct: FC<SearchProductProps> =
    ({ AddToSaved, product, CartButton, isTransformed }) => {
      const { t } = useTranslation()
      const helpers = new Helpers()
      const { salesman } = product
      return <div className={cn(s.search_item, { [s.transformed]: isTransformed })}>
        <LinkToProduct productId={product.productId}>
          <div className={s.product_image}>
            <NextImage src={product.images[0]} def={DefaultAssets.PRODUCT}/>
          </div>
          <div className={s.greyLine}></div>
        </LinkToProduct>
        <div className={s.info_block}>
          <Link href={`${routes.USERS}/${salesman.userId}`}>
            <div className={s.info_header}>
              <div className={s.avatar}>
                <NextImage src={salesman.avatar} def={DefaultAssets.AVATAR}/>
              </div>
              <Typo className={s.name}>
                {helpers.toNormalName(salesman)}
              </Typo>
            </div>
          </Link>
          <h2 className={s.product_name}>{product.name}
            <InStock inStock={product.inStock} withoutTitle/></h2>
          <h3 className={s.price}>${product.price}.00</h3>
          <div className={s.ratings}>
            <Rating name="size-small" readOnly
              defaultValue={product.rating} size="small"/>
            <h2><FiHeart size={'14px'} color={'#ff4a4a'}/> {product.savedCount} Orders</h2>
          </div>
          <Typo className={s.description}>{product.description}</Typo>
          <LinkToProduct productId={product.productId}>
            <BlueLink className={s.blueLink}>{t('View_details')}</BlueLink>
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
