import Head from 'next/head'
import {FC} from 'react'
import {ContainerTitle} from 'shared/ui/kit'
import {CartItems} from 'widgets/Cart/CartItems'
import {RemoveAllSaved, RemoveFromSaved} from 'features/Saved'
import {SortedProducts} from 'widgets/Products'
import {GithubBanner} from 'entities/Banners/GithubBanner'
import {WithSpring} from 'shared/ui/animations'

const Saved: FC = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Saved</title>
    </Head>
    <ContainerTitle>Saved products</ContainerTitle>
    <CartItems Add={null} Remove={RemoveFromSaved} RemoveAll={RemoveAllSaved}/>
    <SortedProducts/>
    <GithubBanner/>
  </WithSpring>
}

export default Saved
