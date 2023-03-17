import { FC, memo } from 'react'
import s from './style.module.scss'
import { FaShoppingCart, MdMessage } from 'shared/ui/icons'
import { Rating } from '@mui/material'
import { InStock } from 'shared/ui/kit'
import { useTranslation } from 'react-i18next'
import { Product } from 'widgets/Products'


interface ProductParamsProps{
  product: Product
}

const ProductParams = memo<ProductParamsProps>(({ product }) => {
  const { t } = useTranslation()
  return <div className={s.product_info_block}>
    <InStock inStock={product.inStock}/>
    <h3 className={s.product_title}>
      {product.name}
    </h3>
    <div className={s.rating_block}>
      <Rating name="size-small" readOnly defaultValue={product.rating} size="small"/>
      <h3><MdMessage/> {product.savedCount} {t('1_Saved')}</h3>
      <h3><FaShoppingCart/> {product.features.slice(0, 2).join(', ')}</h3>
    </div>
    <h2 className={s.price}>${product.price}</h2>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>{t('Type')}</span> <span>{t(product.type)}</span>
      </div>
    </div>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>{t('Design')}</span> <span>{t(product.design)}</span>
      </div>
      <div className={s.params_flex}>
        <span>{t('Model')}</span> <span>{t(product.model)}</span>
      </div>
      <div className={s.params_flex}>
        <span>{t('Material')}</span> <span>{product.material}</span>
      </div>
    </div>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>{t('In_Stock')}</span> <span>{product.inStock ? 'Yes' : 'No'}</span>
      </div>
      <div className={s.params_flex}>
        <span>{t('Size')}</span> <span>{t(product.size)}</span>
      </div>
      <div className={s.params_flex}>
        <span>{t('Product_Id')}</span> <span>{product.productId}</span>
      </div>
    </div>
  </div>
})

export default ProductParams
