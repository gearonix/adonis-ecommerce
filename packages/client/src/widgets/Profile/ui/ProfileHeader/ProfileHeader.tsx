import { ProfileHeader as ProfileHeaderTemp } from 'entities/Profile'
import { FC } from 'react'
import { ChangeBackground } from 'features/Profile'
import { useSelector } from 'shared/types/redux'
import { selectReformattedUser } from 'widgets/Profile/store/selectors'
import { ContentModal, SimpleModal } from 'shared/ui/material'
import { EditProfile } from 'widgets/Profile'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'
import { UserInfo } from 'entities/Profile'
import { UserSelectors } from 'shared/selectors'
import { useTranslation } from 'react-i18next'

const ProfileHeader: FC = () => {
  const user = useSelector(selectReformattedUser)
  const isMe = useSelector(UserSelectors.isMe)
  const editProfile = useBooleanState()
  const profileInfo = useBooleanState()
  const { t } = useTranslation()
  if (!user) return null

  return <>
    <ContentModal isOpened={editProfile.isOpen} close={editProfile.close}>
      <EditProfile close={editProfile.close}/>
    </ContentModal>
    <SimpleModal isOpened={profileInfo.isOpen} close={profileInfo.close}
      title={`${t('Detailed_information')} (${user.userName})`}>
      <UserInfo user={user}/>
    </SimpleModal>
    <ProfileHeaderTemp ChangeBackground={<ChangeBackground/>}
      openProfile={editProfile.open}
      openInfo={profileInfo.open}
      user={user}
      isMe={isMe}
    />
  </>
}


export default ProfileHeader
