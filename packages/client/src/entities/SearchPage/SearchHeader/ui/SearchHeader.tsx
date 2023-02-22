import React, {FC} from 'react'
import s from './style.module.scss'

const SearchHeader: FC<{ Filters: FC, amount: number }> = ({Filters, amount}) => {
  return <div className={s.controls}>
    <div className={s.controls_title}>
      <h4>{amount} items in <span className={s.bold}>All categories</span></h4>
    </div>
    <Filters/>
  </div>
}

export default SearchHeader
