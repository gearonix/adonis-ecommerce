import React from 'react'
import Head from 'next/head'
import {Categories} from 'entities/Banners/Categories'
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {Languages} from 'entities/Banners/Languages'
import {RecommendedItems} from 'widgets/Products'
import {FindProductBanner} from 'widgets/Banners/FindProductBanner'
import {WithSpring} from 'shared/ui/animations'
import {RecommendedMap, SortedProducts} from 'entities/Products'
import {ProductTypes} from 'shared/types/elements'

const MainPage = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Online Shopping</title>
    </Head>
    <Categories/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[1]}/>
    <FindProductBanner/>
    <RecommendedItems Component={RecommendedMap}/>
    <ExtraServices/>
    <Languages/>
  </WithSpring>
}

export default MainPage
