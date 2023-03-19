import { RequiredState } from 'app/store/types'

const UsersSelectors = {
  count: ({ users }: RequiredState) => users.count,
  page: ({ users }: RequiredState) => users.page
}

export default UsersSelectors
