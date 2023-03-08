import { FC, MutableRefObject, useRef, useState } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { ImageModal } from 'shared/ui/material'
import { DefaultAssets } from 'shared/config/consts/assets'
import { CartSaved, SavedProps } from 'features/Saved'
import { Nullable } from 'shared/types/common'
import { Product } from 'shared/types/slices'
import { useTranslation } from 'react-i18next'

export interface CartItemProps {
  Remove?: FC<{ ref?: MutableRefObject<undefined>, productId: number }>,
  AddToSaved?: Nullable<FC<SavedProps>>,
  product: Product
}

const CartItem: FC<CartItemProps> = ({ Remove, AddToSaved, product }) => {
  const [isOpen, openModal] = useState<boolean>(false)
  const removeBtnRef = useRef()
  const { t } = useTranslation()

  // return <ApiAnimation className={s.item} type={'reduceLength'} param={140} subscriber={removeBtnRef}>
  return <div className={s.item}> {product.images.length && <ImageModal isOpen={isOpen} close={openModal} image={product.images[0]}
    def={DefaultAssets.PRODUCT}/>}
  <div className={s.image_wrapper} onClick={() => openModal(true)}>
    <NextImage src={product.images[0]} def={DefaultAssets.PRODUCT}/>

  </div>
  <div className={s.item_info}>
    <h4>{product.name}</h4>
    <p>{t('Size')} {product.size}, {t('Material')}
      {product.material}, {t('Type')} {product.type}, {t('Model')} {product.model},
        {t('Supplier')} {product.salesmanId}</p>
    <div className={s.item_buttons}>
      {Remove && <Remove ref={removeBtnRef} productId={product.productId}/>}
      {AddToSaved && <AddToSaved productId={product.productId} Component={CartSaved}/>}
    </div>
  </div>
  <div className={s.price_block}>
    <h2>${product.price}.00</h2>
  </div>
  </div>
}

export default CartItem
