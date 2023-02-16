import {FC} from 'react';
import s from './style.module.scss';
import {CategoryProps} from './types';
import {BlueLink} from 'shared/ui';
import Typo from 'shared/ui/Typo/Typo';

const Controls: FC<CategoryProps> = ({title, Component, items}) => {
  return <div className={s.category}>
    <Typo>{title}</Typo>
    {items.map((item, idx) => <Component title={title} idx={idx} key={idx}/>)}
    <BlueLink>Disable all</BlueLink>
  </div>;
};

export default Controls;
