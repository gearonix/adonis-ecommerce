import React, {FC} from 'react'
import s from './style.module.scss'
import {FiHeart} from 'shared/ui/icons'
import {ApiAnimation} from 'shared/ui/animations'


const AddToSavedSearch: FC = () => {
  return <ApiAnimation className={s.heart} type={'reverseScale'}>
    <FiHeart/>
  </ApiAnimation>
}

export default AddToSavedSearch
