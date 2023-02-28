import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {getUserProducts, productsActions} from 'widgets/Products'
import {SavedProvider} from 'features/Saved'
import {ProductsSelectors} from 'shared/selectors'
import {NoProducts, SearchedProduct} from 'shared/ui/kit'
import UserSelectors from 'shared/selectors/userSelectors'
import {CartButton} from 'features/ProductPage/BuyProduct'
import {SearchPagination} from 'features/SearchPage/SearchPagination'

const MyProducts : FC = () => {
  const dispatch = useDispatch()
  const myProducts = useSelector(ProductsSelectors.products)
  const page = useSelector(ProductsSelectors.page)
  const userId = useSelector(UserSelectors.userId)

  useEffect(() => {
    dispatch(getUserProducts(page))
  }, [page, userId])

  useEffect(() => {
    return () => {
      dispatch(productsActions.clearProducts())
    }
  }, [])

  return <>
    {myProducts.length > 0 ? myProducts.map((product) => {
      return <SearchedProduct AddToSaved={SavedProvider}
        key={product.productId} product={product} CartButton={CartButton}/>
    }) : <NoProducts/>}
    <SearchPagination/>
  </>
}


export default MyProducts
