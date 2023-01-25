import {NCT} from 'types/global'
import s from './profile_wall.module.scss';
import {
    FiHeart, AiOutlineFileAdd,
    AiOutlineUnorderedList,
    BsDot,
    BsThreeDotsVertical, MdMessage,
    BsCartPlus,
    AiOutlineUpload, BsTrash, BsPen
} from 'icons'
import { NextImage } from 'components/UIkit/components';
import {ContentModal, ImageModal, HeadField, TextArea, MuiSelect, StandardSelect} from "components/UIkit/mui/mui_components";
import {useState} from "react";
import { Product } from 'components/pages/search/search_list/search_list';
import { MessageBar } from 'components/pages/messenger/main/main';
import { ProductImageBlock, ProductInfoBlock } from 'components/pages/product/product_info/product_info';

const ProfileWall: NCT = () => {
    const [isAddProduct,openAddProduct] = useState<boolean>(false)
    return <div className={s.profile_wall}>
        <ContentModal isOpened={isAddProduct} close={() => openAddProduct(false)}
        >
            <AddProduct/>
        </ContentModal>

        <div className={s.content_buttons}>
            <button className={s.selected}><AiOutlineFileAdd/> Posts</button>
            <button><AiOutlineUnorderedList/> Products</button>
            <button><FiHeart/> Saved</button>
            <div className={s.add_product}>
                <button className={'outlined_button'}
                onClick={() => openAddProduct(true)}><BsCartPlus/> Add Product</button>
            </div>
        </div>
        <MessageBar placeholder={'What\'s new?'}/>
        <div className={s.content_block}>
            {/*<h2 className={s.not_found_title}>No posts found</h2>*/}
            <Post/>
            <Product/>
        </div>
    </div>
}


export const ChangeProfile = () => {
    return <div className={s.add_product_block}>
        <h2 className={s.title}>Change Profile</h2>
        <div className={s.container}>

            <div className={s.background}>
                <NextImage src={'/profile_back.jpg'} />
                <button className="primary_button"><BsPen/> Change background</button>
            </div>
            <div className={s.user_info_block}>
                <div className={s.user_avatar_block}>
                    <div className={s.user_avatar}>
                        <NextImage src={'/avatar.jpg'} />
                    </div>
                    <button className="outlined_button">Change avatar</button>
                </div>
                <HeadField title={'Username'}/>
                <HeadField title={'Password'} isPassword readOnly/>
            </div>
            <TextArea/>
            <div className={s.save_buttons}>
                <button className="primary_button">Save</button>
                <button className="outlined_button">Cancel</button>
            </div>
        </div>
    </div>
}

export const AddProduct = () => {
    return <div className={s.add_product_block}>
        <h2 className={s.title}>Add Product</h2>
        <div className={s.container}>
            <div className={s.flex}>
                <HeadField title={'Product Name'}/>
                <HeadField title={'Product Price'}/>
            </div>
            <TextArea/>
            <div className={s.select_container}>
                <StandardSelect/>
                <StandardSelect/>
            </div>


        </div>
        <h2 className={s.title}>Product Images</h2>
        <div className={s.container}>
            <div className={s.flex}>
                <ProductImageBlock/>
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
            <div className={s.save_buttons}>
                <button className="primary_button">Add Product</button>
                <button className="outlined_button">Cancel</button>
            </div>
        </div>
        </div>

}

export const Post = () => {
    return <>
        <PostUI/>
        <Comments/>
        </>
}


export const Comments = () => {
    return <div className={s.comments}>
        <PostUI/>
        <PostUI/>
        <h4 className={'hover_link'}>See more comments</h4>
    </div>
}

export const PostUI = () => {
    const [isModalOpened,openModal] = useState<boolean>(false)
    return <><div className={s.post}>
        <div className={s.user_image}>
            <NextImage src={'/avatar.jpg'}/>
        </div>
        <div className={s.user_info}>
            <h2 className={s.user_name}>Gigachad <span><BsDot/>Apr 1</span></h2>
            <p className={s.post_text}>Some text for post
            </p>
            <ImageModal isOpen={isModalOpened} handleOpen={openModal} image={'/profile_back.jpg'} />
            <div className={s.attached_image} onClick={() => openModal(true)}>
                <NextImage src={'/profile_back.jpg'} />
            </div>
            <div className={s.post_buttons}>
                <button><MdMessage/> 10</button>
                <button><FiHeart/> 10</button>
            </div>
            <div className={s.options}>
                <BsThreeDotsVertical/>
            </div>
        </div>
    </div>
        </>
}

export default ProfileWall
