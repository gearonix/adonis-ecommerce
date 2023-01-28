import s from "./style.module.scss";
import {useState} from "react";
import {NextImage} from "shared/ui";
import {BsDot, BsThreeDotsVertical, FiHeart, MdMessage} from "icons";
import {ImageModal} from "mui";

const Post = () => {
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
    const [isModalOpened, openModal] = useState<boolean>(false)
    return <>
        <div className={s.post}>
            <div className={s.user_image}>
                <NextImage src={'/avatar.jpg'}/>
            </div>
            <div className={s.user_info}>
                <h2 className={s.user_name}>Gigachad <span><BsDot/>Apr 1</span></h2>
                <p className={s.post_text}>Some text for post
                </p>
                <ImageModal isOpen={isModalOpened} handleOpen={openModal} image={'/electronic_prewiew.svg'}/>
                <div className={s.attached_image} onClick={() => openModal(true)}>
                    <NextImage src={'/electronic_prewiew.svg'}/>
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


export default Post
