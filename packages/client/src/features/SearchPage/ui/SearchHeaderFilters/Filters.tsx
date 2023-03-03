import React, { ChangeEvent, FC } from 'react'
import { SizeButtons } from 'shared/ui/material'
import { useDispatch, useSelector } from 'shared/types/redux'
import { productsActions } from 'widgets/Products'
import { Checkbox } from '@mui/material'
import { ProductsSelectors } from 'shared/selectors'
import s from './style.module.scss'

const SearchHeaderFilters: FC = () => {
  const dispatch = useDispatch()
  const { inStock } = useSelector(ProductsSelectors.filter)

  const onChangeInStock = (e: ChangeEvent<HTMLInputElement>, inStock: boolean) => {
    dispatch(productsActions.changeFilter({ inStock }))
  }

  return <div className={s.controls_buttons}>
    <Checkbox onChange={onChangeInStock} title={'In Stock'} value={inStock}/>
    <span>in stock</span>
    <SizeButtons/>
  </div>
}

export default SearchHeaderFilters
