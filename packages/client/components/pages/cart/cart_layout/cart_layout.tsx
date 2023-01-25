import s from './cart_layout.module.scss'
import {NextImage} from "components/UIkit/components";
import cn from 'classnames'
import {AiFillLock, AiOutlineArrowLeft, FaTruck, MdMessage} from 'icons';
import {ImageModal} from "components/UIkit/mui/mui_components";
import {FC, useState} from "react";

const CartLayout: FC<{mode: 'cart' | 'saved'}> = ({mode}) => {
    const items = [1, 2, 3]
    const [isOpen, openModal] = useState<boolean>(false)
    return <div style={{width: '50%'}}>
        <div className={s.cart_container}>
            <ImageModal isOpen={isOpen} handleOpen={openModal} image={'/item_mock_2.svg'}/>

            <div className={s.cart_layout}>
                {items.map(i => {
                    return <div className={s.item} key={i}>
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
                                <button className={cn('outlined_button',
                                    s.remove_button)}>
                                    Remove
                                </button>
                                {mode == 'cart' &&
                                <button className={cn('outlined_button',
                                    s.save_button)}>
                                    Save for later
                                </button>}
                            </div>
                        </div>
                        <div className={s.price_block}>
                            <h2>$78.99</h2>
                        </div>

                    </div>
                })}
                <div className={s.cart_buttons}>
                    <button className={cn(mode == 'cart' ? 'primary_button' : 'red_button', s.back_to_shop)}>
                        <AiOutlineArrowLeft/>
                        Back to shop
                    </button>
                    <button className={cn('outlined_button', s.remove_all)}>
                        Remove all
                    </button>
                </div>
            </div>
        </div>
        <div className={s.cart_icons}>
            <div className={s.item}>
                <div className={s.icon_wrapper}>
                    <AiFillLock/>
                </div>
                <div>
                    <h4>Secure payment</h4>
                    <span>Have you ever finally just </span>
                </div>
            </div>
            <div className={s.item}>
                <div className={s.icon_wrapper}>
                    <MdMessage/>
                </div>
                <div>
                    <h4>Customer support</h4>
                    <span>Have you ever finally just </span>
                </div>
            </div>
            <div className={s.item}>
                <div className={s.icon_wrapper}>
                    <FaTruck/>
                </div>
                <div>
                    <h4>Free delivery</h4>
                    <span>Have you ever finally just </span>
                </div>
            </div>
        </div>

    </div>
}

export default CartLayout
