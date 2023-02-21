import React from 'react'
import Head from 'next/head'
import {Categories} from 'entities/Banners/Categories'
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {Languages} from 'entities/Banners/Languages'
import {Recommended, RecommendedItems} from 'widgets/Products'
import {FindProductBanner} from 'widgets/Banners/FindProductBanner'
import {WithSpring} from 'shared/ui/animations'

const MainPage = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Online Shopping</title>
    </Head>
    <Categories/>
    <Recommended/>
    <Recommended/>
    <FindProductBanner/>
    <RecommendedItems/>
    <ExtraServices/>
    <Languages/>
  </WithSpring>
}

export default MainPage
