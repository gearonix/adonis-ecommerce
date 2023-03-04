import { useSelector } from 'react-redux'
import { AuthSelectors } from 'shared/selectors'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/routes'

export const useUnauthorized = () => {
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const router = useRouter()

  return <T>(callback: (arg: T) => void) => {
    return (arg: T) => {
      if (!isAuthorized) {
        return router.push(routes.LOGIN)
      }
      callback(arg)
    }
  }
}
