import {FC} from 'react';
import s from './style.module.scss';
import {PrimarySelectProps} from './types';

export const PrimarySelect: FC<PrimarySelectProps> = ({values}) => {
    return <select className={s.primary_select}>
        {values.map((i) => {
            return <option key={i}>{i}</option>;
        })}
    </select>;
};

