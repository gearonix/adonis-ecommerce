import { useSelector } from 'react-redux'
import { AuthSelectors } from 'shared/selectors'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'

export const useUnauthorized = () => {
  const isAuthorized = useSelector(AuthSelectors.isAuthorized)
  const router = useRouter()

  return <T>(callback: (arg: T) => void) => {
    return (arg: T) => {
      if (!isAuthorized) {
        router.push(routes.LOGIN)
        return
      }
      callback(arg)
    }
  }
}
