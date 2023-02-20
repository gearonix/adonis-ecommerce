import {ProfileHeaderTemp} from 'entities/Profile/ProfileHeader'
import {FC} from 'react'
import {ChangeBackground} from 'features/Profile/ChangeBackground'
import {OpenProfileEdit} from 'features/Profile/OpenProfileEdit'
import {useSelector} from 'shared/types/redux'
import {selectReformattedUser} from 'widgets/Profile/store/selectors'

const ProfileHeader: FC<{ openProfile: () => void }> = ({openProfile}) => {
  const user = useSelector(selectReformattedUser)
  if (!user) return null

  return <ProfileHeaderTemp ChangeBackground={<ChangeBackground/>}
    OpenProfileEdit={<OpenProfileEdit openProfile={openProfile}/>} user={user}/>
}

export default ProfileHeader
