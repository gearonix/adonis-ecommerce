import React, {FC} from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import {Rating} from '@mui/material';
import Typo from 'shared/ui/Typo/Typo';
import {BlueLink} from 'shared/ui';
import {SearchProductProps} from './types';

const SearchProduct: FC<SearchProductProps> = ({AddToSaved}) => {
  return <div className={s.search_item}>
    <Image src={'/mock_item.svg'} alt={'Check it!'}
      width={210} height={210} priority={true}/>
    <div className={s.info_block}>
      <Typo>Canon Cmera EOS 2000, Black 10x zoom</Typo>
      <h3 className={s.price}>$998.00</h3>
      <Rating name="size-small" readOnly
        defaultValue={2} size="small"/>
      <Typo>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua</Typo>
      <BlueLink>View details</BlueLink>
      <AddToSaved/>
    </div>
  </div>;
};

export default SearchProduct;
