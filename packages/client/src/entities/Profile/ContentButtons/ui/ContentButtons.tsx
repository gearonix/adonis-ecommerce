import {FC} from 'react';
import s from './style.module.scss';
import {AiOutlineFileAdd, AiOutlineUnorderedList, FiHeart} from 'icons';
import {ContentButtonsProps} from '../types';

const ContentButtons: FC<ContentButtonsProps> = ({AddProduct}) => {
    return <div className={s.content_buttons}>
        <button className={s.selected}><AiOutlineFileAdd/> Posts</button>
        <button><AiOutlineUnorderedList/> Products</button>
        <button><FiHeart/> Saved</button>
        <div className={s.add_product}>
            {AddProduct}
        </div>
    </div>;
};

export default ContentButtons;
