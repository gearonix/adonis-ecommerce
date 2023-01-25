import s from './product_info.module.scss'
import {Rating} from '@mui/material';
import Image from 'next/image';
import cn from "classnames";
import {useState} from "react";
import {ImageModal} from "components/UIkit/mui/mui_components";
import {NextImage} from 'components/UIkit/components';
import {AiOutlineCheck, FaShoppingCart, FiHeart, HiOutlineFlag, MdMessage, TfiWorld} from 'icons';

const ProductInfo = () => {
    return <article className={s.product_info}>
        <ProductImageBlock/>
        <ProductInfoBlock/>
        <ProductPurchase/>
    </article>
}

export const ProductImageBlock = () => {
    const [isModalOpened, openModal] = useState<boolean>(false)
    return <><ImageModal isOpen={isModalOpened} handleOpen={openModal} image={'/item_mock_2.svg'}/>
    <div className={s.product_images}>
        <div className={s.image_wrapper} onClick={() => openModal(true)}>
            <NextImage src={'/item_mock_2.svg'}/>
        </div>
        <div className={s.image_carousel}>
            <div className={s.image_carousel_wrapper}>
                <NextImage src={'/item_mock_2.svg'}/>
            </div>
            <div className={s.image_carousel_wrapper}>
                <NextImage src={'/item_mock_2.svg'}/>
            </div>
        </div>
    </div>
        </>
}
export const ProductInfoBlock = () => {
    return <div className={s.product_info_block}>
        <h5 className={'color_green'}>
            <AiOutlineCheck/> In stock
        </h5>
        <h3 className={s.product_title}>
            Mens Long Sleeve T-shirt Cotton
            Base Layer Slim Muscle
        </h3>
        <div className={s.rating_block}>
            <Rating name="size-small" readOnly defaultValue={2} size="small"/>
            <h3><MdMessage/> 32 reviews</h3>
            <h3><FaShoppingCart/> 32 reviews</h3>
        </div>
        <h2 className={s.price}>$244</h2>
        <div className={s.params_block}>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
        </div>
        <div className={s.params_block}>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
        </div>
        <div className={s.params_block}>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
            <div className={s.params_flex}>
                <span>Price:</span> <span>Negotiable</span>
            </div>
        </div>
    </div>
}

export const ProductPurchase = () => {
    return <div className={s.purchase_block}>
        <div className={s.purchase_card}>
            <div className={s.purchase_supplier}>
                <Image height={48} width={48} alt={'Supplier'} src={'/supplier_mock.svg'}/>
                <h2>
                    Supplier <br/>
                    Guanjoi Trading LLC
                </h2>
            </div>
            <span className={s.supplier_params}><HiOutlineFlag/> Germany, Berlin</span>
            <span className={s.supplier_params}><MdMessage/>Germany, Berlin</span>
            <span className={s.supplier_params}><TfiWorld/>Germany, Berlin</span>
            <button className={cn('primary_button', s.sell_button)}>Buy product</button>
            <button className={cn('outlined_button', s.sell_button)}>Seller’s profile</button>
        </div>
        <span className={s.save_later}><FiHeart/> Save for later</span>
    </div>
}

export default ProductInfo
