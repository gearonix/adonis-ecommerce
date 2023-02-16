import s from './style.module.scss';
import {ContainerTitle} from 'shared/ui';
import {RecommendedItemT} from 'entities/SearchMapItems';
import {SearchMap} from 'features/SearchPage/MapList';


const RecommendedItems = () => {
  return <article className={s.recommended_items}>
    <ContainerTitle>Recommended items</ContainerTitle>
    <div className={s.items_block}>
      <SearchMap values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} Item={RecommendedItemT}/>
    </div>
  </article>;
};

export default RecommendedItems;
