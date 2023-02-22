import {ProfileHeaderTemp} from 'entities/Profile/ProfileHeader'
import {FC} from 'react'
import {ChangeBackground} from 'features/Profile/ChangeBackground'
import {OpenProfileEdit} from 'features/Profile/OpenProfileEdit'
import {useSelector} from 'shared/types/redux'
import {selectReformattedUser} from 'widgets/Profile/store/selectors'
import {useBooleanState} from 'shared/lib/helpers/hooks/common'
import {ContentModal} from 'shared/ui/mui'
import {EditProfile} from 'widgets/Profile'

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
