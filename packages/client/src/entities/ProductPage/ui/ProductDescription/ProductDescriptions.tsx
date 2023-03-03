import { FC } from 'react'
import s from './style.module.scss'
import { Table } from 'shared/ui/material'
import { BlueLinkHeader } from 'shared/ui/kit'
import Advantage from 'shared/ui/kit/Components/Advantage/ui/Advantage'
import { ProductSelectors } from 'shared/selectors'
import { Product } from 'shared/types/slices'
import { useSelector } from 'shared/types/redux'

const ProductDescriptions: FC = () => {
  const product = useSelector(ProductSelectors.product) as Product

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
