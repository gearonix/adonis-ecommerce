import {CartLayout} from "components/pages/cart"
import {Recommended, SearchForm} from "components/pages/main";
import {GithubBanner} from "components/pages/product";
import Head from "next/head";
import React from "react";

const Cart = () => {
    return <main>
        <Head>
            <title>Adonis - Shopping Cart</title>
        </Head>
        <CartLayout/>
        <Recommended/>
        <SearchForm/>
        <GithubBanner/>
    </main>
}

export default Cart
