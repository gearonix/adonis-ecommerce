import { onEnter } from 'features/SearchPage/lib/helpers'
import { Button } from 'shared/ui/kit'
import { FC, MutableRefObject, useCallback, useRef } from 'react'
import s from './style.module.scss'
import { FieldValues } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'
import { RxCross1 } from 'shared/ui/icons'
import { Display, WithSpring } from 'shared/lib/components'

interface HeaderInputProps{
    submit: () => void,
    values: FieldValues,
}

export const HeaderInput: FC<HeaderInputProps> = ({ submit, values }) => {
  const { t } = useTranslation()

  const onClear = useCallback(() => {
    values.setValue('')
  }, [])

  return <div className={s.search}>
    <div className={s.search_wrapper}>
      <input className={s.search_input}
        placeholder={t('Search') || 'Search'}
        autoComplete={'off'} {...values.inputProps} onKeyDown={onEnter(submit)} />
      <WithSpring>
        <RxCross1 onClick={onClear}/>
      </WithSpring>
    </div>
    <Button w={'90px'} onClick={submit}>
      {t('Search')}
    </Button>
  </div>
}
