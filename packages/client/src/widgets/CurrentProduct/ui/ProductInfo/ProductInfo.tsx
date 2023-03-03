import { FC, useEffect } from 'react'
import s from './style.module.scss'
import { ProductImages, ProductParams, PurchaseProduct } from 'entities/ProductPage'
import { ImageCarousel, CartButton } from 'features/ProductPage'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getProduct } from '../../store/thunks/getProduct'
import { useRouter } from 'next/router'
import { ProductSelectors } from 'shared/selectors'
import { Product } from 'shared/types/slices'
import { SavedProvider } from 'features/Saved'
import { productActions } from 'widgets/CurrentProduct'

const ProductInfo: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const id = router.query.id as string
  const product = useSelector(ProductSelectors.currentProduct)
  const productInfo = product.productInfo as Product

  useEffect(() => {
    dispatch(getProduct(id))
    return () => {
      dispatch(productActions.clearProduct())
    }
  }, [id])

  if (!productInfo.productId) {
    return null
  }

  return <article className={s.product_info}>
    <ProductImages ImageCarousel={ImageCarousel} files={productInfo.images}/>
    <ProductParams product={productInfo}/>
    <PurchaseProduct CartButton={CartButton} AddToSaved={SavedProvider} product={product}/>
  </article>
}

export default ProductInfo
