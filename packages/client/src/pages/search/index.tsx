import Head from 'next/head'
import { FC } from 'react'
import { RecommendedItems, SearchAside, SearchList } from 'widgets/Products'
import { SearchHeader } from 'widgets/SearchPage'
import { NavigationTitle } from 'shared/ui/kit'
import { RecommendedMap } from 'entities/Products'
import { WithSpring } from 'shared/lib/components'
import { SearchPagination } from 'features/SearchPage'
import { ExtraServices } from 'entities/Banners'

const SearchPage: FC = () => {
  return <WithSpring>
    <NavigationTitle>Home {'>'} Search</NavigationTitle>
    <main className='search_page'>
      <Head>
        <title>Adonis - Search items</title>
      </Head>
      <SearchAside/>
      <div style={{ position: 'relative', width: '68%' }}>
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
