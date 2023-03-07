import React from 'react'
import Head from 'next/head'
import { RecommendedItems } from 'widgets/Products'
import { RecommendedMap, SortedProducts } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { WithSpring } from 'shared/lib/components'
import { ExtraServices, FindProductBanner } from 'entities/Banners'
import { Categories } from 'widgets/Banners'
import { SearchProductsForm } from 'features/SearchPage'
import { ProductBannerForm } from 'entities/SearchPage'


const MainPage = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Online Shopping</title>
    </Head>
    <Categories/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[1]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[4]}/>
    <FindProductBanner Form={<SearchProductsForm Component={ProductBannerForm}/>}/>
    <RecommendedItems Component={RecommendedMap}/>
    <ExtraServices/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
  </WithSpring>
}

export default MainPage
