import Head from 'next/head'
import {FC} from 'react'
import {RecommendedItems, SearchAside, SearchList} from 'widgets/Products'
import {SearchHeader} from 'widgets/SearchPage/SearchHeader'
import {NavigationTitle} from 'shared/ui/kit'
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {WithSpring} from 'shared/ui/animations'
import {RecommendedMap} from 'entities/Products'
import {SearchPagination} from 'features/SearchPage/SearchPagination'

const SearchPage: FC = () => {
  return <WithSpring>
    <NavigationTitle>Home {'>'} Search</NavigationTitle>
    <main className='search_page'>
      <Head>
        <title>Adonis - Search items</title>
      </Head>
      <SearchAside/>
      <div style={{position: 'relative', width: '68%'}}>
        <SearchHeader/>
        <SearchList/>
        <SearchPagination/>
      </div>
    </main>
    <ExtraServices/>
    <RecommendedItems Component={RecommendedMap}/>
  </WithSpring>
}


export default SearchPage
