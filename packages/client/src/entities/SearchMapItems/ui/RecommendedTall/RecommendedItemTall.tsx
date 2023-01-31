import {FC} from 'react';
import s from './style.module.scss'
import {NextImage} from "shared/ui";

const RecommendedItemTall: FC = () => {
    return <div className={s.item}>
        <div className={s.image_wrapper}>
            <NextImage src={'/mock_item.svg'}/>
        </div>
        <h3 className={s.price}>$10.30</h3>
        <span className={s.item_description}>
                T-shirts with multiple colors, for men
                </span>
    </div>
}

export default RecommendedItemTall
