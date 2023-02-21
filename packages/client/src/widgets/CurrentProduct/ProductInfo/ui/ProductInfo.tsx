import {FC} from 'react'
import s from './style.module.scss'
import {ProductImagesShowcase} from 'entities/ProductPage/ProductImage'
import {ImageCarousel} from 'features/ProductPage/ImageCarousel'
import {ProductParams} from 'entities/ProductPage/ProductParams'
import {PurchaseProduct} from 'entities/ProductPage/PurchaseProduct'
import {BuyProduct} from 'features/ProductPage/BuyProduct'
import {AddToSavedProduct} from 'features/Saved'

const ProductInfo: FC = () => {
  return <article className={s.product_info}>
    <ProductImagesShowcase ImageCarousel={ImageCarousel} files={[]}/>
    <ProductParams/>
    <PurchaseProduct BuyProduct={BuyProduct} AddToSaved={AddToSavedProduct}/>
  </article>
}

export default ProductInfo
