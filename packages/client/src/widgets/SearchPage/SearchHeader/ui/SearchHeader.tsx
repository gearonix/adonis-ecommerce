import {FC} from 'react'
import {SearchHeaderFilters} from 'features/SearchPage/SearchHeaderFilters'
import {SearchHeaderSkeleton} from 'entities/SearchPage/SearchHeader'
import {useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'

const SearchHeader: FC = () => {
  const itemsAmount = useSelector(ProductSelectors.productsLength)
  return <SearchHeaderSkeleton Filters={SearchHeaderFilters} amount={itemsAmount}/>
}

export default SearchHeader
