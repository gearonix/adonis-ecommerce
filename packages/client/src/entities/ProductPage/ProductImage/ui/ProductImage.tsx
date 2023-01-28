import {FC, useState} from 'react';
import s from './style.module.scss'
import {ImageModal} from "mui";
import {NextImage} from "shared/ui";

const ProductImage: FC<{ ImageCarousel: FC }> = ({ImageCarousel}) => {
    const [isModalOpened, openModal] = useState<boolean>(false)
    return <><ImageModal isOpen={isModalOpened} handleOpen={openModal} image={'/mock_item.svg'}/>
        <div className={s.product_images}>
            <div className={s.image_wrapper} onClick={() => openModal(true)}>
                <NextImage src={'/mock_item.svg'}/>
            </div>
            <ImageCarousel/>
        </div>
    </>
}

export default ProductImage
