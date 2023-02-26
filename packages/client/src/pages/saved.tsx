import Head from 'next/head'
import {FC} from 'react'
import {ContainerTitle} from 'shared/ui/kit'
import {CartItems} from 'widgets/Cart'
import {RemoveAllSaved, RemoveFromSaved} from 'features/Saved'
import {RecommendedItems} from 'widgets/Products'
import {GithubBanner} from 'entities/Banners/GithubBanner'
import {WithSpring} from 'shared/ui/animations'
import {ProductTypes} from 'shared/types/elements'
import {SortedProducts} from 'entities/Products'

const Saved: FC = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Saved</title>
    </Head>
    <ContainerTitle>Saved products</ContainerTitle>
    <CartItems Add={null} Remove={RemoveFromSaved} RemoveAll={RemoveAllSaved}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
    <GithubBanner/>
  </WithSpring>
}

export default Saved
