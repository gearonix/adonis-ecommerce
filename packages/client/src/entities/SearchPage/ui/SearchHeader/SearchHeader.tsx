import React, { FC, memo } from 'react'
import s from './style.module.scss'
import { ObjectNullable } from 'shared/types/common'
import { SearchQuery } from 'widgets/Products/types'
import { Helpers } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

interface SearchHeaderProps{
  Filters: FC,
  amount: number,
  filter: ObjectNullable<SearchQuery>
}

const SearchHeader = memo<SearchHeaderProps>((props) => {
  const { Filters, amount, filter: { page, inStock, view, rating, ...filter } } = props
  const helpers = new Helpers()
  const categories = Object.values(helpers.partial(filter)).join(', ')
  const { t } = useTranslation()
  return <div className={s.controls}>
    <div className={s.controls_title}>
      <h4>{amount} {t('items')} {t('in')} <span className={s.bold}>
        {helpers.byDefault(categories, t('All_categories'))}</span></h4>
    </div>
    <Filters/>
  </div>
})

export default SearchHeader
