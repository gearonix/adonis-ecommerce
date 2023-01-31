import {FC, useRef, useState} from 'react';
import s from './style.module.scss'
import {NextImage} from "shared/ui";
import {ImageModal} from "mui";
import {CartItemProps} from "../../types";
import {ApiAnimation} from "shared/lib/animations";

const CartItem: FC<CartItemProps> = ({Remove, SaveForLater}) => {
    const [isOpen, openModal] = useState<boolean>(false)
    const removeRef = useRef()
    return <ApiAnimation className={s.item} type={'reduceLength'} param={140} subscriber={removeRef}>
        <ImageModal isOpen={isOpen} handleOpen={openModal} image={'/mock_item.svg'}/>
        <div className={s.image_wrapper} onClick={() => openModal(true)}>
            <NextImage src={'/mock_item.svg'}/>
        </div>
        <div className={s.item_info}>
            <h4>T-shirts with multiple colors,
                for men and lady</h4>
            <p>Size: medium, Color: blue, Material:
                Plastic
                Seller: Artel Market</p>
            <div className={s.item_buttons}>
                <Remove ref={removeRef}/>
                {SaveForLater && <SaveForLater/>}
            </div>
        </div>
        <div className={s.price_block}>
            <h2>$78.99</h2>
        </div>

    </ApiAnimation>
}

export default CartItem
