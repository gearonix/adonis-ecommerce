import {AppState} from 'shared/types/redux'
import {Helpers} from 'shared/lib/helpers/others'
import {createSelector} from '@reduxjs/toolkit'


const helpers = new Helpers()

const UserSelectors = {
  userId: ({user}: AppState) => user.userId,
  user: ({user}: AppState) => user,
  userName: createSelector((state: AppState) => state.user, (user) => {
    if (user.firstName) {
      return user.firstName
    }
    return helpers.getNameFromEmail(user.email || '')
  }),
}


export default UserSelectors
