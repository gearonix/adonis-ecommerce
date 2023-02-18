import {AppState} from 'shared/types/redux'
import {Helpers} from 'shared/lib/helpers/others'

const helpers = new Helpers()

const Selectors = {
  userId: (state: AppState) => state.user.userId,
  user: (state: AppState) => state.user,
  userName: ({user}: AppState) => {
    if (user.firstName) {
      return user.firstName
    }
    helpers.getNameFromEmail(user.email || '')
  },
}


export default Selectors
