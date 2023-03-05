import { FC } from 'react'
import s from './style.module.scss'
import { Table } from 'shared/ui/material'
import { BlueLinkHeader } from 'shared/ui/kit'
import Advantage from 'shared/ui/kit/Components/Advantage/ui/Advantage'
import { ProductSelectors } from 'shared/selectors'
import { Product } from 'shared/types/slices'
import { useSelector } from 'shared/types/redux'
import { Displayed } from 'shared/lib/components'
import { CiWarning } from 'react-icons/ci'

const ProductDescriptions: FC = () => {
  const product = useSelector(ProductSelectors.product) as Product
  const isExists = useSelector(ProductSelectors.isExists)


  return <div className={s.product_params}>
    <BlueLinkHeader/>
    <div className={s.wrapper}>
      <Displayed condition={isExists}>
        <div className={s.description}>
          {product.description}
        </div>
        <Table product={product}/>
        {product?.features?.map((feature, idx) => {
          return <Advantage title={feature} key={idx}/>
        })}
      </Displayed>
      {!isExists &&
          <div className={s.description}>
            <CiWarning/> Product has no description
          </div>
      }
    </div>
  </div>
}
export default ProductDescriptions
