import {NCT} from 'types/global'
import s from './profile_wall.module.scss';
import {
    FiHeart, AiOutlineFileAdd,
    AiOutlineUnorderedList,
    BsDot,
    BsThreeDotsVertical, MdMessage
} from 'icons'
import { NextImage } from 'components/UIkit/components';
import {MuiModal} from "components/UIkit/mui/mui_components";
import {useState} from "react";
import { Product } from 'components/pages/search/search_list/search_list';
import { MessageBar } from 'components/pages/messenger/main/main';

const ProfileWall: NCT = () => {
    return <div className={s.profile_wall}>
        <div className={s.content_buttons}>
            <button className={s.selected}><AiOutlineFileAdd/> Posts</button>
            <button><AiOutlineUnorderedList/> Products</button>
            <button><FiHeart/> Saved</button>
        </div>
        <MessageBar placeholder={'What\'s new?'}/>
        <div className={s.content_block}>
            {/*<h2 className={s.not_found_title}>No posts found</h2>*/}
            <Post/>
            <Product/>
            {/*<Post/>*/}
            {/*<Post/>*/}
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
            <MuiModal isOpen={isModalOpened} handleOpen={openModal} image={'/profile_back.jpg'} />
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
