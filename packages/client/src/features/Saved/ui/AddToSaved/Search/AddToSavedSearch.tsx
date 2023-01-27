import React, {FC} from 'react';
import s from './style.module.scss'
import {FiHeart} from "icons";

const AddToSavedSearch: FC = () => {
    return <div className={s.heart}>
        <FiHeart/>
    </div>
}

export default AddToSavedSearch
