import { FC, ReactNode, useEffect } from 'react'
import { PenPreloader } from 'shared/ui/kit'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import appConfig from 'app/config/config'
import { Routes, routes } from 'shared/config/consts/routes'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'
import { AuthSocketProvider } from '../socket'
import { AuthSelectors } from 'widgets/Login'

const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen: isLoaded, open: openLoading, close: closeLoading } = useBooleanState()
  const router = useRouter()
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const userId = useSelector(AuthSelectors.userId)

  const authCheck = (url: string) => {
    const path: Routes = url.split('?')[0] as Routes
    const { forbiddenPaths } = appConfig

    // redirect if not registered
    if (!isAuthorized && forbiddenPaths.unauthorized.includes(path)) {
      return router.push(routes.LOGIN)
    }
    // redirect if registered
    if (isAuthorized && forbiddenPaths.authorized.includes(path)) {
      return router.push(`${routes.USERS}/${userId}`)
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
  }, [isAuthorized])

  return <AuthSocketProvider>
    {isLoaded ? children : <PenPreloader/>}
  </AuthSocketProvider>
}

export default AuthGuard
