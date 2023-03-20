import { FC, memo, useEffect } from 'react'
import { useForm } from 'shared/lib/hooks'
import { createDefaultValues } from 'widgets/Users/lib/defaultValues'
import { UsersHeader as UsersHeaderTemplate } from 'entities/Users'
import { useDispatch, useSelector } from 'shared/types/redux'
import { getUsers } from 'widgets/Users/store/thunks/getUsers'
import { UsersForm } from 'widgets/Users/types'
import { UsersSelectors } from 'widgets/Users'


const UsersHeader = memo(() => {
  const { watch, reg, getValues, form } = useForm<UsersForm>(null, createDefaultValues())
  const dispatch = useDispatch()
  const page = useSelector(UsersSelectors.page)

  const onChange = () => {
    dispatch(getUsers(getValues()))
  }

  useEffect(() => {
    const sub = watch(onChange)
    return () => sub.unsubscribe()
  }, [])

  useEffect(() => {
    form.setValue('search', '')
  }, [page])

  return <UsersHeaderTemplate form={form} reg={reg}/>
})


export default UsersHeader
