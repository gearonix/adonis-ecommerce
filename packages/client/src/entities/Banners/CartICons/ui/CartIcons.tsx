import {FC} from 'react';
import s from './style.module.scss'
import {AiFillLock, FaTruck, MdMessage} from "icons";
import {CartIcon} from 'shared/ui';

const CartIcons: FC = () => {
    return <div className={s.cart_icons}>
        <CartIcon Icon={AiFillLock}/>
        <CartIcon Icon={MdMessage}/>
        <CartIcon Icon={FaTruck}/>
    </div>
}


export default CartIcons
