import {FC} from 'react';
import s from './style.module.scss'
import {NextImage} from "shared/ui";

const YouMayLikeItem: FC = () => {
    return <div className={s.item}>
        <div className={s.image_wrapper}>
            <NextImage src={'/mock_item.svg'}/>
        </div>
        <div className={s.info_block}>
            <h4>Apple Watch Series Space Gray</h4>
            <span>$7.00 - $99.50</span>
        </div>
    </div>
}

export default YouMayLikeItem
