import s from './cart_layout.module.scss'
import {NextImage} from "components/UIkit/components";
import cn from 'classnames'
import {AiFillLock, AiOutlineArrowLeft, FaTruck, MdMessage} from 'icons';
import {MuiModal} from "components/UIkit/mui/mui_components";
import {useState} from "react";

const CartLayout = () => {
    const items = [1, 2, 3]
    const [isOpen, openModal] = useState<boolean>(false)
    return <><h2 className="dark_title">My cart (N)</h2>
        <div className={s.cart_container}>
            <MuiModal isOpen={isOpen} handleOpen={openModal} image={'/item_mock_2.svg'}/>

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
                                <button className={cn('outlined_button',
                                    s.save_button)}>
                                    Save for later
                                </button>
                            </div>
                        </div>
                        <div className={s.price_block}>
                            <h2>$78.99</h2>
                        </div>

                    </div>
                })}
                <div className={s.cart_buttons}>
                    <button className={cn('primary_button', s.back_to_shop)}>
                        <AiOutlineArrowLeft/>
                        Back to shop
                    </button>
                    <button className={cn('outlined_button', s.remove_all)}>
                        Remove all
                    </button>
                </div>
            </div>
            <div className={s.checkout_block}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
                <div className={s.total_block}>
                    <h4>Total:</h4>
                    <h4>$1357.97</h4>
                </div>
                <button className={cn('green_button', s.checkout_button)}>
                    Checkout
                </button>
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

    </>
}

export default CartLayout
