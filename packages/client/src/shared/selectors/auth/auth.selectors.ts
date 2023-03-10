import { AppState } from 'shared/types/redux'
import { Helpers } from 'shared/lib/helpers'

const helpers = new Helpers()

const AuthSelectors = {
  isAuthorized: ({ auth }: AppState) => auth.isAuthorized,
  userId: ({ auth }: AppState) => auth.userId,
  userName: ({ auth }: AppState) => {
    return helpers.toNormalName(auth)
  },
  avatar: ({ auth }: AppState) => auth.avatar,
  user: ({ auth }: AppState) => auth
}


export default AuthSelectors
