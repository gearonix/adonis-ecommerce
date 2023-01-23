import Head from "next/head";
import React from "react";
import {ExtraServices, RecommendedItems} from "components/pages/main";
import {Aside, SearchList} from "components/pages/search";


const SearchPage = () => {
    return <>
        <h2 className={'search_head'}>Home {'>'} Search</h2>
        <main className='search_page'>
            <Head>
                <title>Adonis - Search items</title>
            </Head>
            <Aside/>
            <SearchList/>
        </main>
        <ExtraServices/>
        <RecommendedItems/>
    </>
}


export default SearchPage;
