import Head from 'next/head'
import React from 'react'
import {CartItems, CartProdiver} from 'widgets/Cart'
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
import {useSelector} from 'shared/types/redux'
import {CartSelectors} from 'shared/selectors'

const Cart = () => {
  const productsCount = useSelector(CartSelectors.count)
  return <WithSpring>
    <Head>
      <title>Adonis - Shopping Cart</title>
    </Head>
    <ContainerTitle>My cart ({productsCount})</ContainerTitle>
    <div className={'cart_page'}>
      <CartProdiver>
        <CartItems RemoveAll={RemoveAllCard} Remove={RemoveFromCard}
          Add={AddToSavedCart}/>
        <Checkout CheckoutButton={CheckoutButton}/>
      </CartProdiver>
    </div>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[1]}/>
    <FindProductBanner/>
    <GithubBanner/>
  </WithSpring>
}

export default Cart
