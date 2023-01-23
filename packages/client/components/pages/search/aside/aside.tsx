import s from './aside.module.scss'
import {FC} from "react";
import cn from 'classnames'
import {CheckBoxControl, RadioControl, RatingControl, TypographyControl} from '../../../UIkit/mui/mui_components';
import {ControlsProps} from "../../../UIkit/mui/mui.types";

const Aside = () => {
    const array = ['Item1', 'Item 2', 'Item 3', 'Item 4', '5']
    return <aside className={s.aside}>
        <Category title={'Category'} items={array} Component={TypographyControl}/>
        <Category title={'Category'} items={array} Component={CheckBoxControl}/>
        <Category title={'Category'} items={array} Component={CheckBoxControl}/>
        <Category title={'Category'} items={array} Component={RadioControl}/>
        <Category title={'Category'} items={array} Component={RatingControl}/>
    </aside>
}

type CategoryProps = {
    items: string[],
    title: string,
    Component: FC<ControlsProps>
}

const Category: FC<CategoryProps> = ({title, items, Component}) => {
    return <div className={s.category}>
        <h4 className='typo' style={{marginBottom: 5}}>{title}</h4>
        {items.map((item, idx) => <Component title={title} idx={idx}/>)}
        <a className={cn('hover_link', 'blue_link')}>Disable all</a>
    </div>
}

export default Aside
