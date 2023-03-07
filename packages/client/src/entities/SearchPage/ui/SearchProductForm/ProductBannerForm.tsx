import { FC } from 'react'
import s from './style.module.scss'
import { Button } from 'shared/ui/kit'
import { MuiSimpleInput } from 'shared/ui/material'
import { FieldValues } from 'shared/lib/helpers'


interface Props{
  submit: () => void,
  values: FieldValues
}

const ProductBannerForm: FC<Props> = ({ submit, values }) => {
  return <div className={s.form}>
    <h3 className={s.form_title}>Search your favorite products</h3>
    <MuiSimpleInput placeholder={'Food, Sports, Electronics...'} values={values}/>
    <Button w={'129px'} onClick={submit}>Search!</Button>
  </div>
}

export default ProductBannerForm
