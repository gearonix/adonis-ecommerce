import { memo, ReactElement } from 'react'
import s from './style.module.scss'
import { ProfileBackground, UserAvatar, WriteToUser } from 'shared/ui/kit'
import { Nullable, ObjectNullable } from 'shared/types/common'
import { FormattedUser } from 'widgets/Profile/store/selectors'
import { AiOutlineApi, AiOutlineInfoCircle, BsPen, GiTopHat } from 'shared/ui/icons'
import { useTranslation } from 'react-i18next'
import { Display, Ternary } from 'shared/lib/components'
import { UserStatus } from 'shared/ui/kit/Components/UserStatus/UserStatus'
import { UserRoles } from 'app/config/globals'
import cn from 'classnames'


export interface ProfileHeaderTemplate {
  ChangeBackground: ReactElement,
  openProfile: () => void,
  openInfo: () => void,
  openSettings: () => void,
  user: ObjectNullable<FormattedUser>,
  isMe: Nullable<boolean>,
}


const ProfileHeaderTemplate = memo<ProfileHeaderTemplate>((props) => {
  const { t } = useTranslation()
  const { ChangeBackground, openProfile,
    openInfo, user, isMe, openSettings } = props

  return <div className={s.profile_header}>
    <div className={s.profile_background}>
      <ProfileBackground src={user.background}
        ChangeBackground={ChangeBackground}
        openSettings={openSettings} isMe={isMe}/>
    </div>

    <div className={s.info_block}>
      <div className={s.avatar}>
        <UserAvatar src={user.userImage}/>
        <UserStatus status={user.status} className={s.user_status}/>
      </div>
      <div className={s.user_info}>
        <h2 className={cn(s.user_name, { [s.salesman]: user.role === UserRoles.SALESMAN })}>
          <Ternary where={user.role === UserRoles.CUSTOMER}>
            <AiOutlineApi/>
            <GiTopHat/>
          </Ternary>
          {user.userName}</h2>
        <p className={s.description}>{user.description}</p>
        <h2 onClick={openInfo} className={s.details}><AiOutlineInfoCircle/>{t('Details')}</h2>
      </div>
      <Display when={!isMe}>
        <WriteToUser className={s.change_profile} targetId={user.userId}/>
      </Display>
      <Display when={isMe}>
        <div className={s.change_profile}>
          <button className="outlined_button"
            onClick={openProfile}><BsPen/> <span>{t('Change_profile')}</span></button>
        </div>
      </Display>
    </div>
  </div>
})

export default ProfileHeaderTemplate
