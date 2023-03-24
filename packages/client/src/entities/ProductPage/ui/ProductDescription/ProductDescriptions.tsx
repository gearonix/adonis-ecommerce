import { FC, memo } from 'react'
import s from './style.module.scss'
import { Table } from 'shared/ui/material'
import { BlueLinkHeader } from 'shared/ui/kit'
import Advantage from 'shared/ui/kit/Components/Advantage/ui/Advantage'
import { useSelector } from 'shared/types/redux'
import { Display } from 'shared/lib/components'
import { CiWarning } from 'react-icons/ci'
import { useTranslation } from 'react-i18next'
import { MdOutlineDescription } from 'shared/ui/icons'
import { ProductSelectors } from 'widgets/CurrentProduct'
import { Product } from 'widgets/Products'

const ProductDescriptions = memo(() => {
  const product = useSelector(ProductSelectors.product) as Product
  const isExists = useSelector(ProductSelectors.isExists)
  const { t } = useTranslation()


  return <div className={s.product_params}>
    <BlueLinkHeader label={t('Product_description')} Icon={MdOutlineDescription}/>
    <div className={s.wrapper}>
      <Display when={isExists}>
        <div className={s.description}>
          {product.description}
        </div>
        <Table product={product} className={s.table}/>
        {product?.features?.map((feature, idx) => {
          return <Advantage title={feature} key={idx}/>
        })}
      </Display>
      {!isExists &&
          <div className={s.description}>
            <CiWarning/> Product has no description
          </div>
      }
    </div>
  </div>
})
export default ProductDescriptions
