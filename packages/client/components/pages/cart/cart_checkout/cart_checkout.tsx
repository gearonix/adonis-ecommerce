import {NCT} from 'types/global'
import s from "./cart_checkout.module.scss";
import cn from "classnames";

const CartCheckout: NCT = () => {
    return <div className={s.checkout_block}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
        <div className={s.total_block}>
            <h4>Total:</h4>
            <h4>$1357.97</h4>
        </div>
        <button className={cn('green_button', s.checkout_button)}>
            Checkout
        </button>
    </div>
}

export default CartCheckout
