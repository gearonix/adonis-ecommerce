import React, { ChangeEvent, FC } from 'react'
import { SizeButtons } from 'shared/ui/material'
import { useDispatch, useSelector } from 'shared/types/redux'
import { productsActions } from 'widgets/Products'
import { Checkbox } from '@mui/material'
import s from './style.module.scss'
import { useTranslation } from 'react-i18next'
import { ProductsSelectors } from 'widgets/Products'

const SearchHeaderFilters: FC = () => {
  const dispatch = useDispatch()
  const { inStock } = useSelector(ProductsSelectors.filter)
  const { t } = useTranslation()

  const onChangeInStock = (e: ChangeEvent<HTMLInputElement>, inStock: boolean) => {
    dispatch(productsActions.changeFilter({ inStock }))
  }

  return <div className={s.controls_buttons}>
    <div>
      <Checkbox onChange={onChangeInStock} title={'In stock'} value={inStock}/>
      <span>{t('Verified only')}</span>
    </div>
  </div>
}

export default SearchHeaderFilters
