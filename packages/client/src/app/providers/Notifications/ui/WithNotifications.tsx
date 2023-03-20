import { useNewMessage, notifyActions, NewMessage } from 'app/providers/Notifications'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from 'shared/lib/hooks'
import { useAuthSocket } from 'widgets/Profile/lib/hooks/useAuthSocket'
import { useDispatch, useSelector } from 'shared/types/redux'
import { useEffect } from 'react'
import { MessengerSelectors } from 'widgets/Messenger'
import { AuthSelectors } from 'widgets/Login'


const WithNotifications = () => {
  const { theme } = useTheme()
  const { subscribes } = useAuthSocket()
  const dispatch = useDispatch()
  const selectedRoom = useSelector(MessengerSelectors.selectedId)
  const userId = useSelector(AuthSelectors.userId)
  const isMessageValid = useNewMessage()

  useEffect(() => {
    subscribes.onReceivedNotification((message) => {
      if (isMessageValid(message)) {
        toast(<NewMessage message={message} />)
        dispatch(notifyActions.addNotification(message))
      }
    })
  }, [selectedRoom, userId])


  return <ToastContainer
    position={'bottom-right'}
    theme={theme}
    limit={1}

    autoClose={1500}
  />
}


export default WithNotifications
