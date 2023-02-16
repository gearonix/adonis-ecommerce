import {FC} from 'react';
import {SearchHeaderFilters} from 'features/SearchPage/SearchHeaderFilters';
import {SearchHeaderSkeleton} from 'entities/SearchPage/SearchHeader';

const SearchHeader: FC = () => {
  return <SearchHeaderSkeleton Filters={SearchHeaderFilters}/>;
};

export default SearchHeader;
