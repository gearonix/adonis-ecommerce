import { onEnter } from 'features/SearchPage/lib/helpers'
import { Button } from 'shared/ui/kit'
import { FC } from 'react'
import s from './style.module.scss'
import { FieldValues } from 'shared/lib/helpers'

interface HeaderInputProps{
  submit: () => void,
  values: FieldValues
}

export const HeaderInput: FC<HeaderInputProps> = ({ submit, values }) => {
  return <div className={s.container}>
    <div className={s.search}>
      <input className={s.search_input} placeholder={'Search'} {...values.inputProps}
        onKeyDown={onEnter(submit)} autoComplete={'off'}/>
      <Button w={'90px'} onClick={submit}>
        Search
      </Button>
    </div>
  </div>
}
