import {AppState} from 'shared/types/redux'
import {Helpers} from 'shared/lib/helpers/others'
import {createSelector} from '@reduxjs/toolkit'


const helpers = new Helpers()

const UserSelectors = {
  userId: ({user}: AppState) => user.userId,
  user: ({user}: AppState) => user,
  userName: createSelector((state: AppState) => state.user, helpers.toNormalName),
  userRole: ({user}: AppState) => user.role,
  isMe: ({user}: AppState) => user.isMe,
  selectMyOrUserId(state: AppState) {
    return state.user.userId || state.auth.userId
  },
}


export default UserSelectors
