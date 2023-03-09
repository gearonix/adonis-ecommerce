import { FC } from 'react'
import s from './style.module.scss'
import { HiOutlineFlag, MdMessage, TfiWorld } from 'shared/ui/icons'
import { Button, NextImage } from 'shared/ui/kit'
import { CurrentProductSlice } from 'shared/types/slices'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { DefaultAssets } from 'shared/config/consts/assets'
import { SavedProps, ProductSaved } from 'features/Saved'
import { useTranslation } from 'react-i18next'


export interface PurchaseProductP {
  CartButton: FC,
  AddToSaved: FC<SavedProps>,
  product: CurrentProductSlice,
}


const PurchaseProduct: FC<PurchaseProductP> = ({ AddToSaved, CartButton, product }) => {
  const { t } = useTranslation()
  const { salesman, productInfo } = product
  return <div className={s.purchase_block}>
    <div className={s.purchase_card}>
      <div className={s.purchase_supplier}>
        <div className={s.image_wrapper}>
          <NextImage alt={''}
            src={salesman.avatar || DefaultAssets.AVATAR}
            priority={false} def={DefaultAssets.AVATAR}/>
        </div>

        <h2>
          {t('Supplier')} <br/>
          {salesman.firstName} {salesman.lastName}
        </h2>
      </div>
      <span className={s.supplier_params}><MdMessage/>{salesman.email}</span>
      <span className={s.supplier_params}><TfiWorld/>{salesman.country ? salesman.country :
          'No Country'}</span>
      <span className={s.supplier_params}><HiOutlineFlag/>{salesman.city ? salesman.city : t('No_City')}</span>
      <CartButton/>
      <Link href={`${routes.USERS}/${salesman.userId}`}>
        <Button w={'100%'} color={'blueBordered'}>{t('Sellers_profile')}</Button>
      </Link>
    </div>
    <AddToSaved productId={productInfo.productId as number} Component={ProductSaved}/>
  </div>
}

export default PurchaseProduct
