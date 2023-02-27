import React, {FC, useEffect} from 'react'
import s from './style.module.scss'
import {SearchedProduct} from 'shared/ui/kit'
import {AddToSavedSearch} from 'features/Saved'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductsSelectors} from 'shared/selectors'
import {getProducts} from 'widgets/Products/store/thunks'
import {productsActions} from 'widgets/Products/store/productsReducer'
import CartButton from 'features/ProductPage/BuyProduct/ui/CartButton'

const SearchList: FC = () => {
  const products = useSelector(ProductsSelectors.products)
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
    {products.map((product) => <SearchedProduct AddToSaved={AddToSavedSearch}
      product={product}
      key={product.productId}
      CartButton={CartButton}
    />)}
  </div>
}

export default SearchList
