import { FC, memo } from 'react'
import s from './style.module.scss'
import { Button } from 'shared/ui/kit'
import { MuiSimpleInput } from 'shared/ui/material'
import { FieldValues } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'


interface Props{
  submit: () => void,
  values: FieldValues
}

const ProductBannerForm = memo<Props>(({ submit, values }) => {
  const { t } = useTranslation()
  return <div className={s.form}>
    <h3 className={s.form_title}>{t('Search_your')}</h3>
    <MuiSimpleInput placeholder={t('Food_Sports,')} values={values}/>
    <Button w={'129px'} onClick={submit}>{t('Search')}</Button>
  </div>
})

export default ProductBannerForm
