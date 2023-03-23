import Head from 'next/head'
import React from 'react'
import { CartItems, CartProvider } from 'widgets/Cart'
import { ContainerTitle } from 'shared/ui/kit'
import { Checkout } from 'entities/Cart'
import { CheckoutButton } from 'features/Checkout'
import { RecommendedItems } from 'widgets/Products'
import { RemoveAllCard, RemoveFromCard } from 'features/Cart'
import { ProductTypes } from 'shared/types/elements'
import { SortedProducts } from 'entities/Products'
import { useSelector } from 'shared/types/redux'
import { SavedProvider } from 'features/Saved'
import { WithSpring } from 'shared/lib/components'
import { FindProductBanner, GithubBanner } from 'entities/Banners'
import { SearchProductsForm } from 'features/SearchPage'
import { ProductBannerForm } from 'entities/SearchPage'
import { useTranslation } from 'react-i18next'
import { CartSelectors } from 'widgets/Cart'

const Cart = () => {
  const productsCount = useSelector(CartSelectors.count)
  const { t } = useTranslation()
  return <WithSpring>
    <Head>
      <title>Adonis - Shopping Cart ({productsCount})</title>
    </Head>
    <ContainerTitle disappears>{t('My_Cart')} ({productsCount})</ContainerTitle>
    <div className={'cart_page'}>
      <CartProvider>
        <CartItems RemoveAll={RemoveAllCard} Remove={RemoveFromCard}
          AddToSaved={SavedProvider} />
        <Checkout CheckoutButton={CheckoutButton}/>
      </CartProvider>
    </div>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[4]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[3]}/>
    <FindProductBanner Form={<SearchProductsForm Component={ProductBannerForm}/>}/>
    <GithubBanner/>
  </WithSpring>
}

export default Cart
