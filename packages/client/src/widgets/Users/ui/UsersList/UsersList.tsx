import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getUsers } from 'widgets/Users/store/thunks/getUsers'
import { Pagination, ProductsPreloader } from 'shared/ui/material'
import { PAGE_LIMIT } from 'app/config/globals'
import { userAdapterSelectors, usersActions } from 'widgets/Users/store/slice/usersReducer'
import { UsersSelectors } from 'widgets/Users'
import { User } from 'entities/Users'
import s from './style.module.scss'
import { NotFound, WithLoading } from 'shared/ui/kit'
import { FiUsers } from 'react-icons/fi'


const UsersList = memo(() => {
  const users = useSelector(userAdapterSelectors.selectAll)
  const count = useSelector(UsersSelectors.count)
  const page = useSelector(UsersSelectors.page)
  const isLoading = useSelector(UsersSelectors.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers({ page }))
  }, [page])

  const onPageChange = (page: number) => {
    dispatch(usersActions.changePage(page))
  }

  return <><div className={s.users}>
    <WithLoading when={!users.length} title={'Users'} Icon={FiUsers}
      loading={isLoading} Preloader={ProductsPreloader} count={6}
      NotFound={() => <NotFound title={'Users'} Icon={FiUsers} w={100}
      />}>
      {users.map((user) => <User user={user} key={user.userId}/>)}
    </WithLoading>
  </div>
  <Pagination count={count / PAGE_LIMIT} onChange={onPageChange} page={page} />
  </>
})


export default UsersList
