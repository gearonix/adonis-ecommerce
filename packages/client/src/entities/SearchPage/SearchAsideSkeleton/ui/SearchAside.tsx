import {FC} from 'react';
import s from './style.module.scss'
import {CheckBoxControl, RadioControl, RatingControl, TypographyControl} from "mui";
import Controls from "features/SearchPage/AsideControls/ui/Controls";

const SearchAside: FC = () => {
    const array = ['Item1', 'Item 2', 'Item 3', 'Item 4', '5']
    return <aside className={s.aside}>
        <Controls title={'Category'} items={array} Component={TypographyControl}/>
        <Controls title={'Category'} items={array} Component={CheckBoxControl}/>
        <Controls title={'Category'} items={array} Component={RatingControl}/>
        <Controls title={'Category'} items={array} Component={RadioControl}/>
    </aside>
}

export default SearchAside
