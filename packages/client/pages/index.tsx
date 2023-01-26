import React from 'react';
import Head from "next/head";
import {Categories} from 'entities/Banners/Categories';
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {Languages} from 'entities/Banners/Languages'
import {Recommended, RecommendedItems} from 'widgets/SearchPage/SearchLists';
import {FindProductBanner} from 'widgets/Banners/FindProductBanner'

const MainPage = () => {
    return <div>
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
    </div>
}

export default MainPage
