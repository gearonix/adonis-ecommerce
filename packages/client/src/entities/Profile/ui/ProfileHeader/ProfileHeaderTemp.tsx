import { FC, ReactElement } from 'react'
import s from './style.module.scss'
import { ProfileBackground, UserAvatar } from 'shared/ui/kit'
import { Nullable, ObjectNullable } from 'shared/types/common'
import { FormattedUser } from 'widgets/Profile/store/selectors'
import { AiOutlineInfoCircle, AiOutlineUser, BsPen } from 'shared/ui/icons'
import { useTranslation } from 'react-i18next'
import { Display } from 'shared/lib/components'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'


export interface ProfileHeaderTemplate {
  ChangeBackground: ReactElement,
  openProfile: () => void,
  openInfo: () => void
  user: ObjectNullable<FormattedUser>,
  isMe: Nullable<boolean>,
}


const ProfileHeaderTemp: FC<ProfileHeaderTemplate> = (props) => {
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
      </div>
      <div className={s.user_info}>
        <h2 className={s.user_name}>{user.userName}</h2>
        <p className={s.description}>{user.description}</p>
        <h2 onClick={openInfo} className={s.details}><AiOutlineInfoCircle/>{t('Details')}</h2>
        <span>{user.status}</span>
        <Display when={!isMe}>
          <Link href={{
            pathname: routes.MESSENGER,
            query: { targetId: user.userId }
          }}>
            <button>write to user</button>
          </Link>
        </Display>
      </div>
      <div className={s.change_profile}>
        {isMe && <button className="outlined_button"
          onClick={openProfile}><BsPen/> {t('Change_profile')}</button>}
      </div>
    </div>
  </div>
}

export default ProfileHeaderTemp
