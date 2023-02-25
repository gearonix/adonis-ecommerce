import Head from 'next/head'
import {ProductInfo} from 'widgets/CurrentProduct'
import {ProductDescription} from 'entities/ProductPage/ProductDescription'
import {RecommendedItems} from 'widgets/Products'
import {ExtraServices} from 'entities/Banners/ExtraServices'
import {GithubBanner} from 'entities/Banners/GithubBanner'
import {WithSpring} from 'shared/ui/animations'
import {SortedProducts, YouMayLike} from 'entities/Products'
import {ProductTypes} from 'shared/types/elements'
import {useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'


const ProductPage = () => {
  const productName = useSelector(ProductSelectors.name)

  return <WithSpring>
    <Head>
      <title>Adonis - {productName}</title>
    </Head>
    <h2 className={'search_head'}>Home {'>'} Search {'>'} {productName}</h2>
    <ProductInfo/>
    <div className="product_page">
      <ProductDescription/>
      <RecommendedItems Component={YouMayLike}/>
    </div>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
    <GithubBanner/>
    <ExtraServices/>
  </WithSpring>
}

export default ProductPage
