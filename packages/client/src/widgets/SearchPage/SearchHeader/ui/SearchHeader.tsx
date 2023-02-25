import {FC} from 'react'
import {SearchHeaderFilters} from 'features/SearchPage/SearchHeaderFilters'
import {SearchHeaderSkeleton} from 'entities/SearchPage/SearchHeader'
import {useSelector} from 'shared/types/redux'
import {ProductsSelectors} from 'shared/selectors'

const SearchHeader: FC = () => {
  const itemsAmount = useSelector(ProductsSelectors.total)
  const filter = useSelector(ProductsSelectors.filter)
  return <SearchHeaderSkeleton Filters={SearchHeaderFilters} amount={itemsAmount} filter={filter}/>
}

export default SearchHeader
