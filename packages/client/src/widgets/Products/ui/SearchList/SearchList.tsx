import React, { FC, useEffect } from 'react'
import s from './style.module.scss'
import { NotFound, SearchedProduct } from 'shared/ui/kit'
import { useDispatch, useSelector } from 'shared/types/redux'
import { ProductsSelectors } from 'shared/selectors'
import { getProducts } from 'widgets/Products/store/thunks'
import { productsActions } from 'widgets/Products/store/productsReducer'
import CartButton from 'features/ProductPage/ui/BuyProduct/CartButton'
import SavedProvider from 'features/Saved/ui/SavedProvider/SavedProvider'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'

const SearchList: FC = () => {
  const products = useSelector(ProductsSelectors.products)
  const productsLength = useSelector(ProductsSelectors.length)
  const filter = useSelector(ProductsSelectors.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(filter))
  }, [filter])

  useEffect(() => {
    return () => {
      dispatch(productsActions.clearProducts())
    }
  }, [])


  return <div className={s.items_block}>
    <NotFound show={!!productsLength} title={'Products'} Icon={CartIcon} w={100}>
      {products.map((product) => <SearchedProduct AddToSaved={SavedProvider}
        product={product} key={product.productId} CartButton={CartButton}/>)}
    </NotFound>

  </div>
}

export default SearchList
