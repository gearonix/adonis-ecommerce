import { AppState } from 'shared/types/redux'
import { Helpers } from 'shared/lib/helpers'
import { createSelector } from '@reduxjs/toolkit'
import { UserRoles } from 'app/config/globals'


const helpers = new Helpers()

const UserSelectors = {
  userId: ({ user }: AppState) => user.userId,
  user: ({ user }: AppState) => user,
  userName: createSelector((state: AppState) => state.user, helpers.toNormalName),
  isSalesman: ({ user }: AppState) => user.role === UserRoles.SALESMAN,
  isMe: ({ user }: AppState) => user.isMe,
  selectMyOrUserId(state: AppState) {
    return (state.user.userId || state.auth.userId) as number
  },
  isExists: ({ user }: AppState) => !!user.userId,
  isLoading: ({ user }: AppState) => user.isLoading,
  status: ({ user }: AppState) => user.status
}


export default UserSelectors
