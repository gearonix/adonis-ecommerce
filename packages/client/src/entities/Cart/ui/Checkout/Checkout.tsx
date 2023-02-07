import {FC} from 'react';
import s from './style.module.scss';
import {CheckoutProps} from '../../types';

const Checkout: FC<CheckoutProps> = ({CheckoutButton}) => {
    return <div className={s.checkout_block}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
        <div className={s.total_block}>
            <h4>Total:</h4>
            <h4>$1357.97</h4>
        </div>
        <CheckoutButton/>
    </div>;
};

export default Checkout;
