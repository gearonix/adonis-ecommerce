import React, {FC} from 'react'
import s from './style.module.scss'
import {FiHeart} from 'shared/ui/icons'
import {ApiAnimation} from 'shared/ui/animations'
import cn from 'classnames'
import {SharedSavedProps} from 'features/Saved'


const SearchSaved: FC<SharedSavedProps> = ({onClick, isInSaved}) => {
  return <ApiAnimation className={cn(s.heart, {[s.saved]: isInSaved})}
    type={'reverseScale'} onClick={onClick}>
    <FiHeart/>
  </ApiAnimation>
}

export default SearchSaved
