import { FC } from 'react'
import { CartItemsProps as CartItemsEntity } from 'entities/Cart/ui/CartItems/CartItems'
import { SearchedProduct } from 'shared/ui/kit'
import { CartButton } from 'features/ProductPage'

const ProfileSaved: FC<CartItemsEntity> = ({ items, AddToSaved }) => {
  return <>{items.map((product) => <SearchedProduct AddToSaved={AddToSaved}
    CartButton={CartButton} product={product} key={product.productId}/>)}</>
}


export default ProfileSaved
