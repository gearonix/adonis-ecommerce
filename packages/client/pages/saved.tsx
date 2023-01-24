import Head from 'next/head'
import {NCT} from 'types/global'
import {CartLayout} from "components/pages/cart";
import React from "react";
import {Recommended} from "components/pages/main";
import {GithubBanner} from "components/pages/product";

const Saved: NCT = () => {
    return <>
        <Head>
            <title>Adonis - Saved</title>
        </Head>
        <h2 className="dark_title">Saved products</h2>
        <CartLayout mode={'saved'}/>
        <Recommended/>
        <GithubBanner/>

        </>
}

export default Saved
