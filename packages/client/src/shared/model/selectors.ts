import {AppState} from 'shared/types/redux'


const Selectors = {
  userId: (state: AppState) => state.user.userId,
  user: (state: AppState) => state.user,
}


export default Selectors
