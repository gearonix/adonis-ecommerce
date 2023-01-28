import {FC} from 'react';
import s from './style.module.scss'
import {ProductImage} from "entities/ProductPage/ProductImage";
import {ImageCarousel} from "features/ProductPage/ImageCarousel";
import {AiOutlineUpload, BsTrash} from "icons";

const ProductImages: FC = () => {
    return <div className={s.flex}>
        <ProductImage ImageCarousel={ImageCarousel}/>
        <div className={s.add_image_block}>
            <p className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipis
                Lorem ipsum dolor sit amet
            </p>
            <div className={s.flex}>
                <button className={'primary_button'}><AiOutlineUpload/> Upload Files</button>
                <button className={'outlined_button'}><BsTrash/> Remove all</button>
            </div>
            <h2 className={s.title}>Product Name</h2>
            <h2 className={s.title}>Price: <b>$123</b></h2>
        </div>
    </div>
}

export default ProductImages
