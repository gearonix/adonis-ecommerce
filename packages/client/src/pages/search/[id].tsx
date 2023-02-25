import Head from 'next/head'
import {ProductInfo} from 'widgets/CurrentProduct/ProductInfo'
import {ProductDescription} from 'entities/ProductPage/ProductDescription'
import {RecommendedItems, SortedProducts} from 'widgets/Products'
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {GithubBanner} from 'entities/Banners/GithubBanner'
import {WithSpring} from 'shared/ui/animations'
import {YouMayLike} from 'entities/Products'


const ProductPage = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - [Item]</title>
    </Head>
    <h2 className={'search_head'}>Home {'>'} Search {'>'} [Item]</h2>
    <ProductInfo/>
    <div className="product_page">
      <ProductDescription/>
      <RecommendedItems Component={YouMayLike}/>
    </div>
    <SortedProducts/>
    <GithubBanner/>
    <ExtraServices/>
  </WithSpring>
}

export default ProductPage
