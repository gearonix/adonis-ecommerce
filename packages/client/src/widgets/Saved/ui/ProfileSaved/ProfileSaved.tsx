import { FC } from 'react'
import { CartItemsProps as CartItemsEntity } from 'entities/Cart/ui/CartItems/CartItems'
import { WithLoading, SearchedProduct } from 'shared/ui/kit'
import { CartButton } from 'features/ProductPage'
import { FiHeart } from 'shared/ui/icons'
import { ProductsPreloader } from 'shared/ui/material'

const ProfileSaved: FC<CartItemsEntity> = ({ items, AddToSaved, loading }) => {
  return <>
    <WithLoading when={!items.length} title={'Saved'} Icon={FiHeart} loading={loading}
                 Preloader={ProductsPreloader} count={3}>
      {items.map((product) => <SearchedProduct AddToSaved={AddToSaved}
        CartButton={CartButton} product={product} key={product.productId}/>)}
    </WithLoading>
  </>
}


export default ProfileSaved
