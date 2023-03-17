import { RequiredState } from 'app/store/types'

const UsersSelectors = {
  users: ({ users }: RequiredState) => users.data,
  count: ({ users }: RequiredState) => users.count,
  page: ({ users }: RequiredState) => users.page
}

export default UsersSelectors
