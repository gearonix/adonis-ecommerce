import React, {FC, useEffect} from 'react'
import s from './style.module.scss'
import {SearchedProduct} from 'shared/ui/kit'
import {AddToSavedSearch} from 'features/Saved'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {getProducts} from 'widgets/Products/store/thunks'
import {productsActions} from 'widgets/Products/store/productsReducer'
import {useRouter} from 'next/router'

const SearchList: FC = () => {
  const {query} = useRouter()
  const products = useSelector(ProductSelectors.products)
  const page = useSelector(ProductSelectors.productsPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(query))
    return () => {
      dispatch(productsActions.clearProducts())
    }
  }, [query])

  useEffect(() => {
    dispatch(getProducts(query))
  }, [page])

  return <div className={s.items_block}>
    {products.map((product) => <SearchedProduct AddToSaved={AddToSavedSearch}
      product={product}
      key={product.productId}
    />)}
  </div>
}

export default SearchList
