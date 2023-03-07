import Head from 'next/head'
import React from 'react'
import { CartItems, CartProdiver } from 'widgets/Cart'
import { ContainerTitle } from 'shared/ui/kit'
import { Checkout } from 'entities/Cart'
import { CheckoutButton } from 'features/Checkout'
import { RecommendedItems } from 'widgets/Products'
import { RemoveAllCard, RemoveFromCard } from 'features/Cart'
import { ProductTypes } from 'shared/types/elements'
import { SortedProducts } from 'entities/Products'
import { useSelector } from 'shared/types/redux'
import { CartSelectors } from 'shared/selectors'
import { SavedProvider } from 'features/Saved'
import { WithSpring } from 'shared/lib/components'
import { FindProductBanner, GithubBanner } from 'entities/Banners'
import { SearchProductsForm } from 'features/SearchPage'
import { ProductBannerForm } from 'entities/SearchPage'

const Cart = () => {
  const productsCount = useSelector(CartSelectors.count)
  return <WithSpring>
    <Head>
      <title>Adonis - Shopping Cart ({productsCount})</title>
    </Head>
    <ContainerTitle>My cart ({productsCount})</ContainerTitle>
    <div className={'cart_page'}>
      <CartProdiver>
        <CartItems RemoveAll={RemoveAllCard} Remove={RemoveFromCard}
          AddToSaved={SavedProvider} />
        <Checkout CheckoutButton={CheckoutButton}/>
      </CartProdiver>
    </div>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[4]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[3]}/>
    <FindProductBanner Form={<SearchProductsForm Component={ProductBannerForm}/>}/>
    <GithubBanner/>
  </WithSpring>
}

export default Cart
