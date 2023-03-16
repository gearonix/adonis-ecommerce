import { FC } from 'react'
import { Pagination } from 'shared/ui/material'
import { useDispatch, useSelector } from 'shared/types/redux'
import { productsActions, ProductsSelectors } from 'widgets/Products'
import { PAGE_LIMIT } from 'app/config/globals'

const SearchPagination : FC = () => {
  const productsCount = useSelector(ProductsSelectors.total)
  const page = useSelector(ProductsSelectors.page) as number
  const dispatch = useDispatch()
  const onChange = (page: number) => {
    dispatch(productsActions.changeFilter({ page }))
  }

  return <Pagination count={productsCount / PAGE_LIMIT} onChange={onChange} page={page}/>
}


export default SearchPagination
