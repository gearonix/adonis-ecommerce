import { FC } from 'react'
import { CartItemsProps as CartItemsEntity } from 'entities/Cart/ui/CartItems/CartItems'
import { NoItems, SearchedProduct } from 'shared/ui/kit'
import { CartButton } from 'features/ProductPage'
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai'
import { FiHeart } from 'shared/ui/icons'

const ProfileSaved: FC<CartItemsEntity> = ({ items, AddToSaved }) => {
  return <>{items.map((product) => <SearchedProduct AddToSaved={AddToSaved}
    CartButton={CartButton} product={product} key={product.productId}/>)}
  <NoItems condition={!items.length} title={'Saved'} Icon={FiHeart} />
  </>
}


export default ProfileSaved
