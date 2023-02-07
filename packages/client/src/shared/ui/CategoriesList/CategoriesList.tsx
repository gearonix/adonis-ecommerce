import React, {FC} from 'react';
import s from './style.module.scss';

export const CategoriesList: FC = () => {
    return <div className={s.list}>
        <h2 className={s.list_item} id='active'>Item</h2>
        <h2 className={s.list_item}>Item</h2>
        <h2 className={s.list_item}>Item</h2>
        <h2 className={s.list_item}>Item</h2>
        <h2 className={s.list_item}>Item</h2>
        <h2 className={s.list_item}>Item</h2>
        <h2 className={s.list_item}>Item</h2>
        <h2 className={s.list_item}>Item</h2>
    </div>;
};

