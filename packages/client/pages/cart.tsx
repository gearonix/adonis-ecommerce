import {CartCheckout, CartLayout} from "components/pages/cart"
import {Recommended, SearchForm} from "components/pages/main";
import {GithubBanner} from "components/pages/product";
import Head from "next/head";
import React from "react";

const Cart = () => {
    return <main>
        <Head>
            <title>Adonis - Shopping Cart</title>
        </Head>
        <h2 className="dark_title">My cart (N)</h2>
        <div className={'cart_page'}>
            <CartLayout mode={'cart'}/>
            <CartCheckout/>
        </div>
        <Recommended/>
        <SearchForm/>
        <GithubBanner/>
    </main>
}

export default Cart
