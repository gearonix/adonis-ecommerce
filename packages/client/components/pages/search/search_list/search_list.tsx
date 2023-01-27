import s from './search_list.module.scss'
import {MuiPagination} from "components/UIkit/mui/mui_components";
import cn from "classnames";
import React, {FC} from "react";
import Image from "next/image";
import {Rating} from '@mui/material';
import {FiHeart} from 'icons'
import {SearchList} from 'widgets/SearchLists';


const Qwe: FC = () => {
    return <div className={s.search_list}>
        <SearchList/>
        <MuiPagination/>
    </div>
}

export const Product: FC = () => {
    return <div className={s.search_item}>
        <Image src={'/mock_item.svg'} alt={'Check it!'}
               width={210} height={210}/>
        <div className={s.info_block}>
            <h2 className='typo'>Canon Cmera EOS 2000, Black 10x zoom</h2>
            <h3 className={s.price}>$998.00</h3>
            <Rating name="size-small" readOnly
                    defaultValue={2} size="small"/>
            <p className='typo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua</p>
            <a className={cn('hover_link', 'blue_link')}>View details</a>
            <div className={s.heart}>
                <FiHeart/>
            </div>
        </div>
    </div>
}

export default Qwe
