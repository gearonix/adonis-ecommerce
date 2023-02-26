import Head from 'next/head'
import React from 'react'
import {CartItems} from 'widgets/Cart/CartItems'
import {ContainerTitle} from 'shared/ui/kit'
import {Checkout} from 'entities/Cart'
import {CheckoutButton} from 'features/Checkout'
import {RecommendedItems} from 'widgets/Products'
import {GithubBanner} from 'entities/Banners/GithubBanner'
import {FindProductBanner} from 'widgets/Banners/FindProductBanner'
import {RemoveAllCard, RemoveFromCard} from 'features/Cart'
import {AddToSavedCart} from 'features/Saved'
import {WithSpring} from 'shared/ui/animations'
import {ProductTypes} from 'shared/types/elements'
import {SortedProducts} from 'entities/Products'

const Cart = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Shopping Cart</title>
    </Head>
    <ContainerTitle>My cart (N)</ContainerTitle>
    <div className={'cart_page'}>
      <CartItems RemoveAll={RemoveAllCard} Remove={RemoveFromCard}
        Add={AddToSavedCart}/>
      <Checkout CheckoutButton={CheckoutButton}/>
    </div>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[1]}/>
    <FindProductBanner/>
    <GithubBanner/>
  </WithSpring>
}

export default Cart
