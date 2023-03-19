import { FC, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getUsers } from 'widgets/Users/store/thunks/getUsers'
import { RequiredState } from 'app/store/types'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { Pagination } from 'shared/ui/material'
import { PAGE_LIMIT } from 'app/config/globals'
import { userAdapterSelectors, usersActions } from 'widgets/Users/store/slice/usersReducer'
import { UsersSelectors } from 'widgets/Users'


const UsersList = memo(() => {
  const users = useSelector(userAdapterSelectors.selectAll)
  const count = useSelector(UsersSelectors.count)
  const page = useSelector(UsersSelectors.page)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers({ page }))
  }, [page])

  const onPageChange = (page: number) => {
    dispatch(usersActions.changePage(page))
  }

  return <>
    {users.map((user, idx) => <Link href={`${routes.USERS}/${user.userId}`} key={idx}>
      <h1>{user.email}</h1>
    </Link>)
    }
    <Pagination count={count / PAGE_LIMIT} onChange={onPageChange} page={page} />
  </>
})


export default UsersList
