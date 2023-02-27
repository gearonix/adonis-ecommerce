import {AppState} from 'shared/types/redux'
import {Helpers} from 'shared/lib/helpers/others'

const helpers = new Helpers()

const AuthSelectors = {
  isAuthorized: ({auth}: AppState) => auth.isAuthorized,
  userId: ({auth}: AppState) => auth.userId,
  userName: ({auth}: AppState) => {
    if (auth.firstName) {
      return auth.firstName
    }
    if (auth.email) {
      return helpers.nameToEmail(auth.email)
    }
    return ''
  },
}


export default AuthSelectors
