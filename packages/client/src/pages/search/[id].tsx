import Head from 'next/head'
import { ProductInfo } from 'widgets/CurrentProduct'
import { RecommendedItems } from 'widgets/Products'
import { SortedProducts, YouMayLike } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { useSelector } from 'shared/types/redux'
import { ProductSelectors } from 'shared/selectors'
import ProductComments from 'widgets/CurrentProduct/ui/ProductComments/ProductComments'
import { ProductDescription } from 'entities/ProductPage'
import { WithSpring } from 'shared/lib/components'
import { ExtraServices, GithubBanner } from 'entities/Banners'


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
    <ProductComments/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[0]}/>
    <GithubBanner/>
    <ExtraServices/>
  </WithSpring>
}

export default ProductPage
