import {FC} from 'react'
import s from './style.module.scss'
import {FaShoppingCart, MdMessage} from 'shared/ui/icons'
import {Rating} from '@mui/material'
import {Product} from 'shared/types/slices'
import {InStock} from 'shared/ui/kit'


interface ProductParamsProps{
  product: Product
}

const ProductParams: FC<ProductParamsProps> = ({product}) => {
  return <div className={s.product_info_block}>

    <InStock inStock={product.inStock}/>
    <h3 className={s.product_title}>
      {product.name}
    </h3>
    <div className={s.rating_block}>
      <Rating name="size-small" readOnly defaultValue={product.rating} size="small"/>
      <h3><MdMessage/> {product.savedCount} Saved</h3>
      <h3><FaShoppingCart/> {product.features.slice(0, 2).join(', ')}</h3>
    </div>
    <h2 className={s.price}>${product.price}</h2>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>Type:</span> <span>{product.type}</span>
      </div>
    </div>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>Design:</span> <span>{product.design}</span>
      </div>
      <div className={s.params_flex}>
        <span>Model:</span> <span>{product.model}</span>
      </div>
      <div className={s.params_flex}>
        <span>Material:</span> <span>{product.material}</span>
      </div>
    </div>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>In Stock:</span> <span>{product.inStock ? 'Yes' : 'No'}</span>
      </div>
      <div className={s.params_flex}>
        <span>Size:</span> <span>{product.size}</span>
      </div>
      <div className={s.params_flex}>
        <span>Product Id:</span> <span>{product.productId}</span>
      </div>
    </div>
  </div>
}

export default ProductParams
