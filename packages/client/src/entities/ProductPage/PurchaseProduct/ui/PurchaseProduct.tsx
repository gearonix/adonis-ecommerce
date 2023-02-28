import {FC} from 'react'
import s from './style.module.scss'
import {HiOutlineFlag, MdMessage, TfiWorld} from 'shared/ui/icons'
import {Button, NextImage} from 'shared/ui/kit'
import {CurrentProduct} from 'shared/types/slices'
import Link from 'next/link'
import {routes} from 'shared/config/routes'
import {DefaultAssets} from 'shared/config/assets'
import {SavedProps, ProductSaved} from 'features/Saved'


export interface PurchaseProductP {
  CartButton: FC,
  AddToSaved: FC<SavedProps>,
  product: CurrentProduct,
}


const PurchaseProduct: FC<PurchaseProductP> = ({AddToSaved, CartButton, product}) => {
  const {salesman, productId} = product
  return <div className={s.purchase_block}>
    <div className={s.purchase_card}>
      <div className={s.purchase_supplier}>
        <div className={s.image_wrapper}>
          <NextImage alt={''}
            src={salesman.avatar || DefaultAssets.AVATAR}
            priority={false} def={DefaultAssets.AVATAR}/>
        </div>

        <h2>
                    Supplier: <br/>
          {salesman.firstName} {salesman.lastName}
        </h2>
      </div>
      <span className={s.supplier_params}><MdMessage/>{salesman.email}</span>
      <span className={s.supplier_params}><TfiWorld/>{salesman.country ? salesman.country :
          'No Country'}</span>
      <span className={s.supplier_params}><HiOutlineFlag/>{salesman.city ? salesman.city : 'No City'}</span>
      <CartButton/>
      <Link href={`${routes.PROFILE}/${salesman.userId}`}>
        <Button w={'100%'} color={'blueBordered'}>Seller’s profile</Button>
      </Link>
    </div>
    <AddToSaved productId={productId} Component={ProductSaved}/>
  </div>
}

export default PurchaseProduct
