import Head from 'next/head'
import { currentProductSlice, ProductInfo } from 'widgets/CurrentProduct'
import { productsActions, RecommendedItems } from 'widgets/Products'
import { SortedProducts, YouMayLike } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { useDispatch, useSelector } from 'shared/types/redux'
import { ProductSelectors } from 'widgets/CurrentProduct'
import ProductComments from 'widgets/CurrentProduct/ui/ProductComments/ProductComments'
import { ProductDescription } from 'entities/ProductPage'
import { DynamicModuleLoader, WithSpring } from 'shared/lib/components'
import { ExtraServices, GithubBanner } from 'entities/Banners'
import { useEffect } from 'react'


const ProductPage = () => {
  const productName = useSelector(ProductSelectors.name)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(productsActions.clearProducts())
    }
  }, [])

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

const ProductWithReducer = () => {
  return <DynamicModuleLoader name={'currentProduct'} reducer={currentProductSlice}>
    <ProductPage/>
  </DynamicModuleLoader>
}

export default ProductWithReducer
