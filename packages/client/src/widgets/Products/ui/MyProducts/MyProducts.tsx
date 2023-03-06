import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getUserProducts, productsActions } from 'widgets/Products'
import { SavedProvider } from 'features/Saved'
import { ProductsSelectors } from 'shared/selectors'
import { WithLoading, SearchedProduct } from 'shared/ui/kit'
import UserSelectors from 'shared/selectors/user'
import { CartButton } from 'features/ProductPage'
import { SearchPagination } from 'features/SearchPage'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'
import { ProductsPreloader } from 'shared/ui/material'

const MyProducts : FC = () => {
  const dispatch = useDispatch()
  const myProducts = useSelector(ProductsSelectors.products)
  const page = useSelector(ProductsSelectors.page)
  const userId = useSelector(UserSelectors.userId)
  const isLoading = useSelector(ProductsSelectors.isLoading)

  useEffect(() => {
    dispatch(getUserProducts(page))
  }, [page, userId])

  useEffect(() => {
    return () => {
      dispatch(productsActions.clearProducts())
    }
  }, [])

  return <>

    <WithLoading when={!myProducts.length} title={'Products'} Icon={CartIcon}
      loading={isLoading} Preloader={ProductsPreloader} count={3}>
      {myProducts.map((product) => {
        return <SearchedProduct AddToSaved={SavedProvider}
          key={product.productId} product={product} CartButton={CartButton}/>
      })}
      <SearchPagination/>
    </WithLoading>
  </>
}


export default MyProducts
