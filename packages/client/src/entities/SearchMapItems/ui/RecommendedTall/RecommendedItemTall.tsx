import {FC} from 'react';
import s from './style.module.scss'
import Image from "next/image";

const RecommendedItemTall: FC = () => {
    return <div className={s.item}>
        <Image src={'/mock_item.svg'} alt={'Check it!'}
               width={200} height={200}/>
        <h3 className={s.price}>$10.30</h3>
        <span className={s.item_description}>
                T-shirts with multiple colors, for men
                </span>
    </div>
}

export default RecommendedItemTall
