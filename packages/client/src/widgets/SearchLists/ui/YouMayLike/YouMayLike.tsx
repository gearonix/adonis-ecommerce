import {FC} from 'react';
import s from './style.module.scss';
import MapList from 'features/SearchPage/MapList/ui/MapList';
import {YouMayLikeItem} from 'entities/SearchMapItems/ui/YouMayLikeItem';

const YouMayLike: FC = () => {
  return <article className={s.you_may_like}>
    <h4 className={s.heading}>You may like</h4>
    <MapList values={[1, 2, 3, 4, 5]} Item={YouMayLikeItem}/>
  </article>;
};

export default YouMayLike;
