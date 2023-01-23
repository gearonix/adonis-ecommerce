import React from 'react';
import Head from "next/head";
import {Categories, ExtraServices, Languages, Recommended, RecommendedItems, SearchForm} from 'components/pages/main';

const MainPage = () => {
    return <div>
        <Head>
            <title>Adonis - Online Shopping</title>
        </Head>
        <Categories/>
        <Recommended/>
        <Recommended/>
        <SearchForm/>
        <RecommendedItems/>
        <ExtraServices/>
        <Languages/>
    </div>
}

export default MainPage
