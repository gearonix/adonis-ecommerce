import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'

export const UserInfo: FC = () => {
  return <div className={s.user_info_wrapper}>
    <div className={s.image}>
      <NextImage src={'/assets/dev/avatar.jpg'}/>
    </div>
    <div className={s.info}>
      <h3>Test User</h3>
      <span>offline</span>
    </div>
  </div>
}

