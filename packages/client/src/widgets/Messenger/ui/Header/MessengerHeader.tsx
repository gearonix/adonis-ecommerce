import { FC, useEffect } from 'react'
import { MessengerHeaderTemp } from 'entities/Messenger'
import { SearchMessages } from 'features/Messenger'
import { useRouter } from 'next/router'
import { useFilteredEffect } from 'shared/lib/hooks'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'
import { useDispatch } from 'shared/types/redux'
import { getRooms } from 'widgets/Messenger/store/thunks'
import { messengerActions } from 'widgets/Messenger'

const MessengerHeader: FC = () => {
  const router = useRouter()
  const targetId = router.query.targetId as string
  const { actions, subscribes } = useMessengerSocket()
  const dispatch = useDispatch()

  useFilteredEffect(() => {
    subscribes.onAddGroup((room) => {
      dispatch(messengerActions.addRoom(room))
    })


    console.log('CHANGED', targetId)
    actions.startChat(targetId)
  }, [targetId])

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  return <MessengerHeaderTemp Search={SearchMessages}/>
}

export default MessengerHeader
