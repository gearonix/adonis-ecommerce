import React, { memo, useEffect } from 'react'
import s from './style.module.scss'
import { WithLoading, NotFound, SearchedProduct } from 'shared/ui/kit'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getProducts } from 'widgets/Products/store/thunks'
import CartButton from 'features/ProductPage/ui/BuyProduct/CartButton'
import SavedProvider from 'features/Saved/ui/SavedProvider/SavedProvider'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'
import { ProductsPreloader } from 'shared/ui/material'
import { ProductsSelectors } from 'widgets/Products'
import cn from 'classnames'

const SearchList = memo(() => {
  const products = useSelector(ProductsSelectors.products)
  const productsLength = useSelector(ProductsSelectors.length)
  const filter = useSelector(ProductsSelectors.filter)
  const isLoading = useSelector(ProductsSelectors.isLoading)
  const isTransformed = useSelector(ProductsSelectors.isViewTransformed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(filter))
  }, [filter])

  return <div className={cn(s.items_block)}>
    <WithLoading when={!productsLength} title={'Products'} Icon={CartIcon}
      loading={isLoading} Preloader={ProductsPreloader} count={6}
      NotFound={() => <NotFound title={'Products'} Icon={CartIcon} w={100}
      />} className={cn({ [s.transformed]: isTransformed })}>
      {products.map((product) => <SearchedProduct AddToSaved={SavedProvider}
        product={product} key={product.productId} CartButton={CartButton}
        isTransformed={isTransformed}
      />)}
    </WithLoading>

  </div>
})

export default SearchList
