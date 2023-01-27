import {FC, useState} from 'react';
import s from './style.module.scss'
import {NextImage} from "shared/ui";
import {ImageModal} from "mui";
import {CartItemProps} from "../../types";

const CartItem: FC<CartItemProps> = ({Remove, SaveForLater}) => {
    const [isOpen, openModal] = useState<boolean>(false)
    return <div className={s.item}>
        <ImageModal isOpen={isOpen} handleOpen={openModal} image={'/item_mock_2.svg'}/>
        <div className={s.image_wrapper} onClick={() => openModal(true)}>
            <NextImage src={'/item_mock_2.svg'}/>
        </div>
        <div className={s.item_info}>
            <h4>T-shirts with multiple colors,
                for men and lady</h4>
            <p>Size: medium, Color: blue, Material:
                Plastic
                Seller: Artel Market</p>
            <div className={s.item_buttons}>
                <Remove/>
                {SaveForLater && <SaveForLater/>}
            </div>
        </div>
        <div className={s.price_block}>
            <h2>$78.99</h2>
        </div>

    </div>
}

export default CartItem
