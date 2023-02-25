import {FC} from 'react'
import s from './style.module.scss'
import {Table} from 'shared/ui/mui'
import {BlueLinkHeader} from 'shared/ui/kit'
import Advantage from 'shared/ui/kit/Components/Advantage/ui/Advantage'
import {useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {CurrentProduct} from 'shared/types/slices'

const ProductDescriptions: FC = () => {
  const product = useSelector(ProductSelectors.product) as CurrentProduct

  if (!product.productId) {
    return null
  }

  return <div className={s.product_params}>
    <BlueLinkHeader/>
    <div className={s.wrapper}>
      <div className={s.description}>
        {product.description}
      </div>
      <Table product={product}/>
      {product.features.map((feature, idx) => {
        return <Advantage title={feature} key={idx}/>
      })}
    </div>
  </div>
}

export default ProductDescriptions
