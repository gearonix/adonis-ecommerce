import { onEnter } from 'features/SearchPage/lib/helpers'
import { Button } from 'shared/ui/kit'
import { FC } from 'react'
import s from './style.module.scss'
import { FieldValues } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

interface HeaderInputProps{
    submit: () => void,
    values: FieldValues
}

export const HeaderInput: FC<HeaderInputProps> = ({ submit, values }) => {
  const { t } = useTranslation()
  return <div className={s.search}>
    <input className={s.search_input} placeholder={t('Search') || 'Search'} {...values.inputProps}
      onKeyDown={onEnter(submit)}/>
    <Button w={'90px'} onClick={submit}>
      {t('Search')}
    </Button>
  </div>
}
