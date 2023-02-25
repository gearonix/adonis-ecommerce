import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {getMyProducts, productsActions} from 'widgets/Products'
import {AddToSavedSearch} from 'features/Saved'
import {ProductsSelectors} from 'shared/selectors'
import {NoProducts, SearchedProduct} from 'shared/ui/kit'

const MyProducts : FC = () => {
  const dispatch = useDispatch()
  const myProducts = useSelector(ProductsSelectors.products)
  const page = useSelector(ProductsSelectors.page)

  useEffect(() => {
    dispatch(getMyProducts(page))
  }, [page])

  useEffect(() => {
    return () => {
      dispatch(productsActions.clearProducts())
    }
  }, [])

  return <>
    {myProducts.length > 0 ? myProducts.map((product) => {
      return <SearchedProduct AddToSaved={AddToSavedSearch}
        key={product.productId} product={product}/>
    }) : <NoProducts/>}
  </>
}


export default MyProducts
