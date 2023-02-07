import {FC} from 'react';
import s from './style.module.scss';
import {MdOutlineDescription} from 'icons';

export const BlueLinkHeader: FC = () => {
    return <div className={s.header}>
        <h4><MdOutlineDescription/> Product description</h4>
    </div>;
};

