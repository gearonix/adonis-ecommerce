import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProfileHeader, userActions} from 'widgets/Profile'
import {WithSpring} from 'shared/ui/animations'
import Head from 'next/head'
import {ProfileWall} from 'widgets/Profile/ui/ProfileWall'
import {UserSelectors} from 'shared/selectors'
import {getUserById} from 'widgets/Login'
import {useRouter} from 'next/router'


const Profile: FC = () => {
  const dispatch = useDispatch()
  const userName = useSelector(UserSelectors.userName)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id))
    }
    return () => {
      dispatch(userActions.clearUser())
    }
  }, [id])


  return <WithSpring>
    <Head>
      <title>Adonis - {userName}</title>
    </Head>

    <ProfileHeader />
    <ProfileWall/>
  </WithSpring>
}

export default Profile
