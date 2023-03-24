import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { ProfileHeader, userActions } from 'widgets/Profile'
import Head from 'next/head'
import { ProfileWall, UserSelectors } from 'widgets/Profile'
import { useRouter } from 'next/router'
import { WithLoading, WithSpring } from 'shared/lib/components'
import { getUserById } from 'widgets/Login/store/thunks'
import { NotFound, PenPreloader } from 'shared/ui/kit'
import { AiOutlineUser } from 'shared/ui/icons'


const Profile: FC = () => {
  const dispatch = useDispatch()
  const userName = useSelector(UserSelectors.userName)
  const isLoading = useSelector(UserSelectors.isLoading)
  const isExists = useSelector(UserSelectors.isExists)
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
      <WithLoading when={!isExists} title={'User'} Icon={AiOutlineUser} loading={isLoading || false}
        Preloader={() => <PenPreloader instantly/>} NotFound={NotFound}>
        <WithSpring>
          <ProfileHeader />
          <ProfileWall/>
        </WithSpring>
      </WithLoading>
    </div>
  </WithSpring>
}


export default Profile
