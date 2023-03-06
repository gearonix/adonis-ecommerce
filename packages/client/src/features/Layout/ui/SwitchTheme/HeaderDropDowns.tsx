import { FC } from 'react'
import s from './style.module.scss'
import { PrimarySelect } from 'shared/ui/kit'
import { ThemeSwitcher } from 'shared/ui/material'
import { useTheme } from 'shared/lib/hooks'

const HeaderDropDowns: FC = () => {
  const { toggleTheme, isLight } = useTheme()
  return <div className={s.dropdowns}>
    <ThemeSwitcher onChange={toggleTheme} value={!isLight}/>
    <PrimarySelect values={['English', 'Russian']}/>
  </div>
}

export default HeaderDropDowns
