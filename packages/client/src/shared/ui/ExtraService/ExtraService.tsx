import {FC} from 'react';
import s from './style.module.scss';
import {AiOutlineSearch} from 'icons';

export const ExtraService: FC = () => {
    return <div className={s.item}>
        <div className={s.item_image}>
            <div className={s.item_button}>
                <AiOutlineSearch/>
            </div>
        </div>
        <h3 className={s.item_title}>Source from Industry Hubs</h3>
    </div>;
};

