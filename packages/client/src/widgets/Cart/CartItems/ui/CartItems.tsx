import {FC} from 'react';
import s from './style.module.scss'
import {CartButtons, CartItem} from 'entities/Cart'
import {CartIcons} from "entities/Banners/CartICons";
import {CardItemsProps} from "widgets/Cart/CartItems/types";

const CartItems: FC<CardItemsProps> = ({Remove, RemoveAll, Add}) => {
    return <div style={{width: '50%'}}>
        <div className={s.cart_container}>
            <div className={s.cart_layout}>
                {[1, 2, 3].map(i => {
                    return <CartItem Remove={Remove} SaveForLater={Add}
                                     key={i}/>
                })}
                <CartButtons BackColor={'primary'} RemoveAll={RemoveAll}/>
            </div>
        </div>
        <CartIcons/>
    </div>
}

export default CartItems
