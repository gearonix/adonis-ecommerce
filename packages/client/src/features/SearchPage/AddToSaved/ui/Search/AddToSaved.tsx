import React, {FC} from 'react';
import s from './style.module.scss'
import {FiHeart} from "icons";

const AddToSaved: FC = () => {
    return <div className={s.heart}>
        <FiHeart/>
    </div>
}

export default AddToSaved
