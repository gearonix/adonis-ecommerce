import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProfileHeader, userActions} from 'widgets/Profile'
import {useRouter} from 'next/router'
import {WithSpring} from 'shared/ui/animations'
import Head from 'next/head'
import {ProfileWall} from 'widgets/Profile/ui/ProfileWall'
import {UserSelectors} from 'shared/selectors'
import {getUserById} from 'widgets/Login'


const Profile: FC = () => {
  const dispatch = useDispatch()
  const {query} = useRouter()
  const userName = useSelector(UserSelectors.userName)

  useEffect(() => {
    if (query.id) {
      dispatch(getUserById(query.id as string))
    }
    return () => {
      dispatch(userActions.clearUser())
    }
  }, [query.id])

  return userName ? <WithSpring>
    <Head>
      <title>Adonis - {userName}</title>
    </Head>

    <ProfileHeader />
    <ProfileWall/>
  </WithSpring> : null
}

export default Profile
