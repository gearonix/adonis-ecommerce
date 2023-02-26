import {AppState} from 'shared/types/redux'

const AuthSelectors = {
  isAuthorized: ({auth}: AppState) => auth.isAuthorized,
  userId: ({auth}: AppState) => auth.userId,
}


export default AuthSelectors
