import Head from 'next/head'
import {FC} from 'react'
import {RecommendedItems, SearchAside, SearchList} from 'widgets/Products'
import {SearchHeader} from 'widgets/SearchPage/SearchHeader'
import {MuiPagination} from 'shared/ui/mui'
import {NavigationTitle} from 'shared/ui/kit'
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {WithSpring} from 'shared/ui/animations'
import {RecommendedItemsTemp} from 'entities/Products'

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
        <MuiPagination/>
      </div>
    </main>
    <ExtraServices/>
    <RecommendedItems Component={RecommendedItemsTemp}/>
  </WithSpring>
}


export default SearchPage
