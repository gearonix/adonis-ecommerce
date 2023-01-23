import s from './search_form.module.scss';
import cn from 'classnames'
import {MuiAutoComplete, MuiInput} from "components/UIkit/mui/mui_components";


const SearchForm = () => {
    return <div className={s.search_form}>
        <h1 className={s.title}>
            An easy way to send requests to all suppliers</h1>
        <p className={s.description}>Lorem ipsum dolor
            sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.</p>
        <div className={s.form}>
            <h3 className={s.form_title}>Send quote to suppliers</h3>
            <MuiInput/>
            <MuiAutoComplete/>
            <button className={cn('primary_button', s.form_button)}
            >Send inquiry
            </button>
        </div>
    </div>
}

export default SearchForm
