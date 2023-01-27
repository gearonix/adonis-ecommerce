import React, {FC} from 'react';
import s from './style.module.scss'
import {SearchMap} from "features/SearchPage/MapList";
import {SearchProduct} from 'entities/SearchMapItems';
import {AddToSavedSearch} from 'features/Saved';

const SearchList: FC = () => {
    return <div className={s.items_block}>
        <SearchMap values={[1, 2, 3, 4, 5, 6, 7, 8]}
                   Item={() => <SearchProduct AddToSaved={AddToSavedSearch}/>}/>
    </div>
}

export default SearchList
