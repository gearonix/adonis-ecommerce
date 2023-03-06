import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { ProfileHeader, userActions } from 'widgets/Profile'
import Head from 'next/head'
import { ProfileWall } from 'widgets/Profile'
import { UserSelectors } from 'shared/selectors'
import { useRouter } from 'next/router'
import { Ternary, WithSpring } from 'shared/lib/components'
import { getUserById } from 'widgets/Login/store/thunks'
import { PenPreloader } from 'shared/ui/kit'


const Profile: FC = () => {
  const dispatch = useDispatch()
  const userName = useSelector(UserSelectors.userName)
  const isLoading = useSelector(UserSelectors.isLoading)
  const { query } = useRouter()
  const id = query.id as string

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
      <title>
        Adonis - {userName}
      </title>
    </Head>
    <div className="users_page">
      <Ternary where={isLoading}>
        <PenPreloader instantly/>
        <>
          <WithSpring>
            <ProfileHeader />
            <ProfileWall/>
          </WithSpring>
        </>
      </Ternary>

    </div>
  </WithSpring>
}


export default Profile
