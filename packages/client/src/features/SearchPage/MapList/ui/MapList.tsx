import {FC} from 'react';
import {RecommendedListProps} from '../types';

const MapList: FC<RecommendedListProps> = ({values, Item}) => {
    return <>
        {values.map((item) => {
            return <Item key={item}/>;
        })}
    </>;
};

export default MapList;
