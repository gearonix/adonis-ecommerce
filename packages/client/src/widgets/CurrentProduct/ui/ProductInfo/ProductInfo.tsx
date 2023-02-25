import {FC, useEffect} from 'react'
import s from './style.module.scss'
import {ProductImagesShowcase} from 'entities/ProductPage/ProductImage'
import {ImageCarousel} from 'features/ProductPage/ImageCarousel'
import {ProductParams} from 'entities/ProductPage/ProductParams'
import {PurchaseProduct} from 'entities/ProductPage/PurchaseProduct'
import {BuyProduct} from 'features/ProductPage/BuyProduct'
import {AddToSavedProduct} from 'features/Saved'
import {useDispatch, useSelector} from 'shared/types/redux'
import {getProduct} from '../../store/thunks/getProduct'
import {useRouter} from 'next/router'
import {productActions} from '../../store/productReducer'
import {ProductSelectors} from 'shared/selectors'
import {CurrentProduct} from 'shared/types/slices'

const ProductInfo: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const id = router.query.id as string
  const product = useSelector(ProductSelectors.product) as CurrentProduct

  useEffect(() => {
    dispatch(getProduct(id))
    return () => {
      dispatch(productActions.clearProduct())
    }
  }, [id])

  if (!product.productId) {
    return null
  }

  return <article className={s.product_info}>
    <ProductImagesShowcase ImageCarousel={ImageCarousel} files={product.images}/>
    <ProductParams product={product}/>
    <PurchaseProduct BuyProduct={BuyProduct} AddToSaved={AddToSavedProduct} salesman={product.salesman}/>
  </article>
}

export default ProductInfo
