import s from './search_list.module.scss'
import {CheckBoxControl, MuiPagination, SizeButtons} from "components/UIkit/mui/mui_components";
import cn from "classnames";
import React, {FC} from "react";
import Image from "next/image";
import {Rating} from '@mui/material';
import {FiHeart} from 'icons'


const SearchList: FC = () => {
    return <div className={s.search_list}>
        <div className={s.controls}>
            <div className={s.controls_title}>
                <h4>12,911 items in <span className={s.bold}>Mobile accessory</span></h4>
            </div>
            <div className={s.controls_buttons}>
                <CheckBoxControl title={'Verified only'} idx={1}/>
                <select className={cn(s.controls_select, 'primary_select')}>
                    <option>All category</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
                <SizeButtons/>
            </div>
        </div>
        <div className={cn(s.item_block, 'custom_scrollbar')}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
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

export default SearchList
