import { FC } from 'react'
import { SearchHeaderFilters } from 'features/SearchPage'
import { SearchHeader as SearchHeaderTemplate } from 'entities/SearchPage'
import { useSelector } from 'shared/types/redux'
import { ProductsSelectors } from 'shared/selectors'

const SearchHeader: FC = () => {
  const itemsAmount = useSelector(ProductsSelectors.total)
  const filter = useSelector(ProductsSelectors.filter)
  return <SearchHeaderTemplate Filters={SearchHeaderFilters} amount={itemsAmount} filter={filter}/>
}

export default SearchHeader
