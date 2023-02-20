import {FC, ReactElement} from 'react'
import s from './style.module.scss'
import {ProfileBackground, Typo, UserAvatar} from 'shared/ui/kit'
import {ObjectNullable} from 'shared/types/common'
import {FormattedUser} from 'widgets/Profile/store/selectors'


export interface ProfileHeaderTemplate {
  ChangeBackground: ReactElement,
  OpenProfileEdit: ReactElement,
  user: ObjectNullable<FormattedUser>
}


const ProfileHeaderTemp: FC<ProfileHeaderTemplate> = ({ChangeBackground, OpenProfileEdit, user}) => {
  return <div className={s.profile_header}>
    <div className={s.profile_background}>
      <ProfileBackground src={user.background} ChangeBackground={ChangeBackground}/>
    </div>

    <div className={s.info_block}>
      <div className={s.avatar}>
        <UserAvatar src={user.userImage}/>
      </div>
      <div className={s.user_info}>
        <h2 className={s.user_name}>{user.userName}</h2>
        <p className={s.description}>{user.description}</p>
      </div>
      <div className={s.change_profile}>
        {OpenProfileEdit}
      </div>
    </div>
    <Typo>{user.country}</Typo>
    <Typo>{user.city}</Typo>
    <Typo>{user.role}</Typo>
    <Typo>{user.date}</Typo>
  </div>
}

export default ProfileHeaderTemp
