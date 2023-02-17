import {FC} from 'react'
import s from './style.module.scss'
import {PrimarySelect} from 'shared/ui/kit'

const SwitchThemeDrops: FC = () => {
  return <div className={s.dropdowns}>
    <PrimarySelect values={['Dark Theme', 'Light Theme']}/>
    <PrimarySelect values={['English', 'Russian']}/>
  </div>
}

export default SwitchThemeDrops
