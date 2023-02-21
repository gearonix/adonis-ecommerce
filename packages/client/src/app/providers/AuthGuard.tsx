import {FC, ReactNode, useEffect} from 'react'
import {Preloader} from 'shared/ui/kit'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import UserSelectors from 'shared/selectors/userSelectors'
import appConfig from 'app/config/config'
import {useBooleanState} from 'shared/lib/helpers/hooks/common'
import {Routes, routes} from 'shared/config/routes'

const AuthGuard: FC<{ children: ReactNode }> = ({children}) => {
  const {isOpen: isLoaded, open: openLoading, close: closeLoading} = useBooleanState()
  const router = useRouter()
  const userId = useSelector(UserSelectors.userId)

  const authCheck = (url: string) => {
    const path: Routes = url.split('?')[0] as Routes
    const {privatePaths} = appConfig

    // redirect if not registered
    if (userId === null && privatePaths.unauthorized.includes(path)) {
      return router.push(routes.LOGIN)
    }
    // redirect if registered
    if (userId && privatePaths.authorized.includes(path)) {
      return router.push(routes.PROFILE)
    }

    openLoading()
  }

  useEffect(() => {
    authCheck(router.asPath)
    router.events.on('routeChangeStart', closeLoading)
    router.events.on('routeChangeComplete', authCheck)
    return () => {
      router.events.off('routeChangeComplete', authCheck)
      router.events.off('routeChangeStart', closeLoading)
    }
  }, [userId])

  return <>
    {isLoaded ? children : <Preloader/>}
  </>
}

export default AuthGuard
