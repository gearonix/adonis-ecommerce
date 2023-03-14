import { FC, useEffect } from 'react'
import { SearchInput } from 'shared/ui/material'
import { useForm } from 'shared/lib/hooks'
import { useDispatch } from 'shared/types/redux'
import { messengerActions } from 'widgets/Messenger'

interface SearchForm{
  search: string
}

const SearchUsers: FC = () => {
  const { reg, watch, getValues } = useForm<SearchForm>(null)
  const dispatch = useDispatch()

  const onChange = () => {
    const filter = getValues().search
    dispatch(messengerActions.changeRoomsFilter(filter))
  }

  useEffect(() => {
    const sub = watch(onChange)
    return () => sub.unsubscribe()
  }, [])

  return <div style={{ width: '90%', margin: '0 auto' }}>
    <SearchInput values={reg('search')} />
  </div>
}

export default SearchUsers
