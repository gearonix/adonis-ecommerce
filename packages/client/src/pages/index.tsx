import React from 'react'
import Head from 'next/head'
import { RecommendedItems } from 'widgets/Products'
import { RecommendedMap, SortedProducts } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { WithSpring } from 'shared/lib/components'
import { Categories, ExtraServices, FindProductBanner, Languages } from 'entities/Banners'
import { SearchProductForm } from 'features/SearchPage'

const MainPage = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Online Shopping</title>
    </Head>
    <Categories/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[1]}/>
    <FindProductBanner Form={SearchProductForm}/>
    <RecommendedItems Component={RecommendedMap}/>
    <ExtraServices/>
    <Languages/>
  </WithSpring>
}

export default MainPage
