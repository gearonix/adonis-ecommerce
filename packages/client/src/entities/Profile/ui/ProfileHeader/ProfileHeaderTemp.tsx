import { FC, memo, ReactElement } from 'react'
import s from './style.module.scss'
import { ProfileBackground, UserAvatar, WriteToUser } from 'shared/ui/kit'
import { Nullable, ObjectNullable } from 'shared/types/common'
import { FormattedUser } from 'widgets/Profile/store/selectors'
import { AiOutlineInfoCircle, BsPen } from 'shared/ui/icons'
import { useTranslation } from 'react-i18next'
import { Display } from 'shared/lib/components'
import { UserStatus } from 'shared/ui/kit/Components/UserStatus/UserStatus'


export interface ProfileHeaderTemplate {
  ChangeBackground: ReactElement,
  openProfile: () => void,
  openInfo: () => void
  user: ObjectNullable<FormattedUser>,
  isMe: Nullable<boolean>,
}


const ProfileHeaderTemp = memo<ProfileHeaderTemplate>((props) => {
  const { t } = useTranslation()
  const { ChangeBackground, openProfile,
    openInfo, user, isMe } = props

  return <div className={s.profile_header}>
    <div className={s.profile_background}>
      <ProfileBackground src={user.background} ChangeBackground={ChangeBackground}/>
    </div>

    <div className={s.info_block}>
      <div className={s.avatar}>
        <UserAvatar src={user.userImage}/>
        <UserStatus status={user.status} className={s.user_status}/>
      </div>
      <div className={s.user_info}>
        <h2 className={s.user_name}>{user.userName}</h2>
        <p className={s.description}>{user.description}</p>
        <h2 onClick={openInfo} className={s.details}><AiOutlineInfoCircle/>{t('Details')}</h2>
      </div>
      <Display when={!isMe}>
        <WriteToUser className={s.change_profile} targetId={user.userId}/>
      </Display>
      <Display when={isMe}>
        <div className={s.change_profile}>
          <button className="outlined_button"
            onClick={openProfile}><BsPen/> {t('Change_profile')}</button>
        </div>
      </Display>
    </div>
  </div>
})

export default ProfileHeaderTemp
