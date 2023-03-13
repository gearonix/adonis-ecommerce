import { ProfileHeader as ProfileHeaderTemp, UserInfo } from 'entities/Profile'
import { FC } from 'react'
import { ChangeBackground } from 'features/Profile'
import { useDispatch, useSelector } from 'shared/types/redux'
import { FormattedUser, selectReformattedUser } from 'widgets/Profile/store/selectors'
import { ContentModal, SimpleModal } from 'shared/ui/material'
import { EditProfile, userActions } from 'widgets/Profile'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'
import { UserSelectors } from 'shared/selectors'
import { useTranslation } from 'react-i18next'
import { Display } from 'shared/lib/components'
import { useAuthSocket } from 'widgets/Profile/lib/hooks/useAuthSocket'
import { useFilteredEffect } from 'shared/lib/hooks'
import { UserStatus } from 'shared/config/consts/others'


const ProfileHeader: FC = () => {
  const user = useSelector(selectReformattedUser) as FormattedUser
  const isMe = useSelector(UserSelectors.isMe)
  const editProfile = useBooleanState()
  const profileInfo = useBooleanState()
  const { t } = useTranslation()
  const { subscribes, actions } = useAuthSocket()
  const dispatch = useDispatch()

  useFilteredEffect(() => {
    subscribes.onStatusChanged((status: UserStatus) => {
      dispatch(userActions.setStatus(status))
    })

    actions.subscribeToStatus(user.userId)
  }, [user.userId])

  return <Display when={user}>
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
  </Display>
}


export default ProfileHeader
