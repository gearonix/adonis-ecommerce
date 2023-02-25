import {FC} from 'react'
import {Pagination} from 'shared/ui/mui'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductsSelectors} from 'shared/selectors'
import {productsActions} from 'widgets/Products'

const SearchPagination : FC = () => {
  const productsCount = useSelector(ProductsSelectors.total)
  const page = useSelector(ProductsSelectors.page) as number
  const dispatch = useDispatch()
  const onChange = (page: number) => {
    dispatch(productsActions.changeFilter({page}))
  }

  return <Pagination count={productsCount / 10} onChange={onChange} page={page}/>
}


export default SearchPagination
