import {FC} from 'react'
import s from './style.module.scss'
import {Button} from 'shared/ui/kit'
import {AutoComplete, MuiSimpleInput} from 'shared/ui/mui'

const SearchProductForm: FC = () => {
  return <div className={s.form}>
    <h3 className={s.form_title}>Send quote to suppliers</h3>
    <MuiSimpleInput/>
    <AutoComplete/>
    <Button w={'129px'}>Send injury</Button>
  </div>
}

export default SearchProductForm
