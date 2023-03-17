import { UsersHeader, UsersList } from 'widgets/Users'
import { DynamicModuleLoader } from 'shared/lib/components'
import { usersSlice } from 'widgets/Users/store/slice/usersReducer'

const UsersPage = () => {
  return <div className={'users'}>
    <UsersHeader/>
    <UsersList/>
  </div>
}

export const UsersWithReducer = () => {
  return <DynamicModuleLoader name={'users'} reducer={usersSlice}>
    <UsersPage/>
  </DynamicModuleLoader>
}


export default UsersWithReducer
