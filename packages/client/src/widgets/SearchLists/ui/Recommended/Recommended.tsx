import {FC} from 'react';
import s from './style.module.scss'
import {Button} from 'shared/ui';
import {SearchMap} from "features/SearchPage/MapList";
import {RecommendedItem} from "entities/SearchMapItems";

export interface RecommendedProps {

}

const Recommended: FC<RecommendedProps> = () => {
    return <div className={s.recommended}>
        <div className={s.image_block}>
            <div className={s.title}>Home and outdoor</div>
            <Button w={'119px'} color={'outlined'}>Source now</Button>
        </div>
        <div className={s.recommended_items}>
            <SearchMap values={[1, 2, 3, 4, 5, 6, 7, 8]} Item={RecommendedItem}/>
        </div>
    </div>
}
export default Recommended
