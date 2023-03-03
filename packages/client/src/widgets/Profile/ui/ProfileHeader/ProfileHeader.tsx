import { ProfileHeader as ProfileHeaderTemp } from 'entities/Profile'
import { FC } from 'react'
import { ChangeBackground } from 'features/Profile'
import { OpenProfileEdit } from 'features/Profile'
import { useSelector } from 'shared/types/redux'
import { selectReformattedUser } from 'widgets/Profile/store/selectors'
import { ContentModal } from 'shared/ui/material'
import { EditProfile } from 'widgets/Profile'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'

const ProfileHeader: FC = () => {
  const user = useSelector(selectReformattedUser)
  const editProfile = useBooleanState()
  if (!user) return null

  return <>
    <ContentModal isOpened={editProfile.isOpen} close={editProfile.close}>
      <EditProfile close={editProfile.close}/>
    </ContentModal>
    <ProfileHeaderTemp ChangeBackground={<ChangeBackground/>}
      OpenProfileEdit={<OpenProfileEdit openProfile={editProfile.open}/>} user={user}/>
  </>
}

export default ProfileHeader
