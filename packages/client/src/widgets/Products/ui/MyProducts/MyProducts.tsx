import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {getMyProducts} from 'widgets/Products/store/thunks/getMyProducts'
import {AddToSavedSearch} from 'features/Saved'
import {ProductSelectors} from 'shared/selectors'
import {NoProducts, SearchedProduct} from 'shared/ui/kit'

const MyProducts : FC = () => {
  const dispatch = useDispatch()
  const myProducts = useSelector(ProductSelectors.myProducts)

  useEffect(() => {
    dispatch(getMyProducts())
  }, [])
  return <>
    {myProducts.length > 0 ? myProducts.map((product) => {
      return <SearchedProduct AddToSaved={AddToSavedSearch}
        key={product.productId} product={product}/>
    }) : <NoProducts/>}
  </>
}


export default MyProducts
