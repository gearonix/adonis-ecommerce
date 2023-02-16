import {FC} from 'react';
import s from './style.module.scss';
import {FindProductBannerP} from './types';

const FindProductSkeleton: FC<FindProductBannerP> = ({Form}) => {
  return <div className={s.search_form}>
    <h1 className={s.title}>
            An easy way to send requests to all suppliers</h1>
    <p className={s.description}>Lorem ipsum dolor
            sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.</p>
    <Form/>
  </div>;
};

export default FindProductSkeleton;
