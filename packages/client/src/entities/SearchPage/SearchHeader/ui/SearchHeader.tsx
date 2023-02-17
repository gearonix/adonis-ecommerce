import React, {FC} from 'react'
import s from './style.module.scss'

const SearchHeader: FC<{ Filters: FC }> = ({Filters}) => {
  return <div className={s.controls}>
    <div className={s.controls_title}>
      <h4>12,911 items in <span className={s.bold}>Mobile accessory</span></h4>
    </div>
    <Filters/>
  </div>
}

export default SearchHeader
