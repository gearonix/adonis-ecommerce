import React, {FC, useEffect} from 'react'
import s from './style.module.scss'
import {SearchedProduct} from 'shared/ui/kit'
import {AddToSavedSearch} from 'features/Saved'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {getProducts} from 'widgets/Products/store/thunks'
import {productsActions} from 'widgets/Products/store/productsReducer'

const SearchList: FC = () => {
  const products = useSelector(ProductSelectors.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts({}))
    return () => {
      dispatch(productsActions.setProducts([]))
    }
  }, [])

  return <div className={s.items_block}>
    {products.map((product) => <SearchedProduct AddToSaved={AddToSavedSearch}
      product={product}
      key={product.productId}
    />)}
  </div>
}

export default SearchList
