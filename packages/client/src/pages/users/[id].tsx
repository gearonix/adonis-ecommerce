import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { ProfileHeader, userActions } from 'widgets/Profile'
import Head from 'next/head'
import { ProfileWall } from 'widgets/Profile'
import { UserSelectors } from 'shared/selectors'
import { useRouter } from 'next/router'
import { WithLoading, WithSpring } from 'shared/lib/components'
import { AiOutlineUser } from 'shared/ui/icons'
import { NotFound } from 'shared/ui/kit'
import { UserPreloader } from 'shared/ui/material'
import { getUserById } from 'widgets/Login/store/thunks'


const Profile: FC = () => {
  const dispatch = useDispatch()
  const userName = useSelector(UserSelectors.userName)
  const isExists = useSelector(UserSelectors.isExists)
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
      <WithLoading title={'User'} Icon={AiOutlineUser} when={!isExists} loading={isLoading}
        NotFound={NotFound} Preloader={UserPreloader} count={1}>
        <ProfileHeader />
        <ProfileWall/>
      </WithLoading>
    </div>
  </WithSpring>
}


export default Profile
