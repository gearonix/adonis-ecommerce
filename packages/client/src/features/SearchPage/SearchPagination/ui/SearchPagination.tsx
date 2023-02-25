import {FC} from 'react'
import {Pagination} from 'shared/ui/mui'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {productsActions} from 'widgets/Products'

const SearchPagination : FC = () => {
  const productsCount = useSelector(ProductSelectors.productsTotalLength)
  const page = useSelector(ProductSelectors.productsPage)
  const dispatch = useDispatch()
  const onChange = (value: number) => {
    dispatch(productsActions.setProductsPage(value))
  }

  return <Pagination count={productsCount / 2} onChange={onChange} page={page}/>
}


export default SearchPagination
