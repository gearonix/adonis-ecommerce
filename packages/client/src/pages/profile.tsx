import Head from 'next/head'
import {ProfileHeader} from 'widgets/Profile'
import {FC} from 'react'
import {WithSpring} from 'shared/ui/animations'
import {useSelector} from 'shared/types/redux'
import selectors from 'shared/selectors/userSelectors'
import ProfileWall from '../widgets/Profile/ui/ProfileWall/ui/ProfileWall'


const Profile: FC = () => {
  const userName = useSelector(selectors.userName)

  return <WithSpring>
    <Head>
      <title>Adonis - {userName}</title>
    </Head>

    <ProfileHeader />
    <ProfileWall/>
  </WithSpring>
}

export default Profile
