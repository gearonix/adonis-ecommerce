import {FC, ReactNode} from 'react'
import s from './style.module.scss'
import {BlueLink} from 'shared/ui/kit'
import Typo from 'shared/ui/kit/Typos/Typo/Typo'
import {FieldValues} from 'shared/lib/helpers/others'

export interface CategoryProps {
  title: string,
  children: ReactNode,
  values: FieldValues
}


const Controls: FC<CategoryProps> = ({title, children, values}) => {
  const disableAll = () => {
    values.setValue(undefined)
  }

  return <div className={s.category}>
    <Typo>{title}</Typo>
    {children}
    <BlueLink onClick={disableAll}>Disable Group</BlueLink>
  </div>
}

export default Controls
