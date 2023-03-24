import { memo, useEffect } from 'react'
import s from './style.module.scss'
import { ProductImages, ProductParams, PurchaseProduct } from 'entities/ProductPage'
import { CartButton, ImageCarousel } from 'features/ProductPage'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getProduct } from 'widgets/CurrentProduct/store/thunks'
import { useRouter } from 'next/router'
import { SavedProvider } from 'features/Saved'
import { productActions, ProductSelectors } from 'widgets/CurrentProduct'
import { NotFound, PenPreloader, WithLoading } from 'shared/ui/kit'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'
import { Product } from 'widgets/Products'

const ProductInfo = memo(() => {
  const dispatch = useDispatch()
  const router = useRouter()
  const id = router.query.id as string
  const product = useSelector(ProductSelectors.currentProduct)
  const isExists = useSelector(ProductSelectors.isExists)
  const isLoading = useSelector(ProductSelectors.isLoading)
  const productInfo = product.productInfo as Product

  useEffect(() => {
    dispatch(getProduct(id))
    return () => {
      dispatch(productActions.clearProduct())
    }
  }, [id])
  return <WithLoading title={'Product'} Icon={CartIcon} when={!isExists} loading={isLoading}
    NotFound={NotFound} Preloader={() => <PenPreloader instantly/>} count={1}>
    <article className={s.product_info}>
      <ProductImages ImageCarousel={ImageCarousel} files={productInfo.images}/>
      <ProductParams product={productInfo}/>
      <PurchaseProduct CartButton={CartButton} AddToSaved={SavedProvider} product={product}/>
    </article>
  </WithLoading>
})

export default ProductInfo
