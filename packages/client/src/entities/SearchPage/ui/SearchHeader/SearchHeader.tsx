import React, { FC } from 'react'
import s from './style.module.scss'
import { ObjectNullable } from 'shared/types/common'
import { SearchQuery } from 'widgets/Products/types'
import { Helpers } from 'shared/lib/helpers'

interface SearchHeaderProps{
  Filters: FC,
  amount: number,
  filter: ObjectNullable<SearchQuery>
}

const SearchHeader: FC<SearchHeaderProps> = ({ Filters, amount, filter: { page, inStock, ...filter } }) => {
  const helpers = new Helpers()
  const categories = Object.values(helpers.partial(filter)).join(', ')
  return <div className={s.controls}>
    <div className={s.controls_title}>
      <h4>{amount} items in <span className={s.bold}>{helpers.byDefault(categories, 'All categories')}</span></h4>
    </div>
    <Filters/>
  </div>
}

export default SearchHeader
