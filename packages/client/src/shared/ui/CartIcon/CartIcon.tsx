import {FC} from 'react';
import s from './style.module.scss';
import {CartIconProps} from '../types';

export const CartIcon: FC<CartIconProps> = ({Icon}) => {
    return <div className={s.item}>
        <div className={s.icon_wrapper}>
            <Icon/>
        </div>
        <div>
            <h4>Secure payment</h4>
            <span>Have you ever finally just </span>
        </div>
    </div>;
};

