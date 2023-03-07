import Head from 'next/head'
import React, { FC } from 'react'
import { ContainerTitle } from 'shared/ui/kit'
import { RemoveFromSaved } from 'features/Saved'
import { RecommendedItems } from 'widgets/Products'
import { GithubBanner } from 'entities/Banners'
import { WithSpring } from 'shared/lib/components'
import { ProductTypes } from 'shared/types/elements'
import { RecommendedMap, SortedProducts } from 'entities/Products'
import { SavedItems } from 'features/Saved'
import { useSelector } from 'shared/types/redux'
import { SavedSelectors } from 'shared/selectors'
import { CartItems as CartItemsTemplate } from 'entities/Cart'

const Saved: FC = () => {
  const savedCount = useSelector(SavedSelectors.count)
  return <WithSpring>
    <Head>
      <title>Adonis - Saved ({savedCount})</title>
    </Head>
    <ContainerTitle>Saved products ({savedCount})</ContainerTitle>
    <SavedItems Remove={RemoveFromSaved} Component={CartItemsTemplate} />
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
    <GithubBanner/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[1]}/>
    <RecommendedItems Component={RecommendedMap}/>
  </WithSpring>
}

export default Saved
