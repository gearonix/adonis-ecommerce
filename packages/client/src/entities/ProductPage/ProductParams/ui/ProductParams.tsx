import {FC} from 'react'
import s from './style.module.scss'
import {AiOutlineCheck, FaShoppingCart, MdMessage} from 'shared/ui/icons'
import {Rating} from '@mui/material'

const ProductParams: FC = () => {
  return <div className={s.product_info_block}>
    <h5 className={'color_green'}>
      <AiOutlineCheck/> In stock
    </h5>
    <h3 className={s.product_title}>
            Mens Long Sleeve T-shirt Cotton
            Base Layer Slim Muscle
    </h3>
    <div className={s.rating_block}>
      <Rating name="size-small" readOnly defaultValue={2} size="small"/>
      <h3><MdMessage/> 32 reviews</h3>
      <h3><FaShoppingCart/> 32 reviews</h3>
    </div>
    <h2 className={s.price}>$244</h2>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
    </div>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
    </div>
    <div className={s.params_block}>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
      <div className={s.params_flex}>
        <span>Price:</span> <span>Negotiable</span>
      </div>
    </div>
  </div>
}

export default ProductParams
