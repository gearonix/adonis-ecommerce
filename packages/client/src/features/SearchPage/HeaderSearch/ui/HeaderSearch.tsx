import {FC} from 'react';
import s from "./style.module.scss";
import {Button, PrimarySelect} from "shared/ui";

const HeaderSearch: FC = () => {
    return <div className={s.search}>
        <input className={s.search_input} placeholder={'Search'}/>
        <PrimarySelect values={['Option1', 'Option2']}/>
        <Button w={'15%'}>
            Search
        </Button>
    </div>
}

export default HeaderSearch
