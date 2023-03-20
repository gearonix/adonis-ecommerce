import React, { ChangeEvent, FC } from 'react'
import { SizeButtons } from 'shared/ui/material'
import { useDispatch, useSelector } from 'shared/types/redux'
import { productsActions } from 'widgets/Products'
import { Checkbox } from '@mui/material'
import s from './style.module.scss'
import { useTranslation } from 'react-i18next'
import { ProductsSelectors } from 'widgets/Products'
import { ProductsView } from 'widgets/Products/types'

const SearchHeaderFilters: FC = () => {
  const dispatch = useDispatch()
  const { inStock } = useSelector(ProductsSelectors.filter)
  const { t } = useTranslation()

  const onChangeInStock = (e: ChangeEvent<HTMLInputElement>, inStock: boolean) => {
    dispatch(productsActions.changeFilter({ inStock }))
  }
  const changeView = (view: ProductsView) => {
    dispatch(productsActions.changeFilter({ view }))
  }

  return <div className={s.controls_buttons}>
    <div>
      <Checkbox onChange={onChangeInStock} title={'In stock'} value={inStock}/>
      <span>{t('Verified only')}</span>
    </div>
    <SizeButtons onClick={changeView}/>
  </div>
}

export default SearchHeaderFilters
