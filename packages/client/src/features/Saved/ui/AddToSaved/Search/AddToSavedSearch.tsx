import React, {FC} from 'react';
import s from './style.module.scss';
import {FiHeart} from 'icons';
import {ApiAnimation} from 'shared/lib/animations';


const AddToSavedSearch: FC = () => {
    return <ApiAnimation className={s.heart} type={'reverseScale'}>
        <FiHeart/>
    </ApiAnimation>;
};

export default AddToSavedSearch;
