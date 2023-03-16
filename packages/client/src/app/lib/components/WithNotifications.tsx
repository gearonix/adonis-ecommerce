import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from 'shared/lib/hooks'
import { useAuthSocket } from 'widgets/Profile/lib/hooks/useAuthSocket'
import { Helpers } from 'shared/lib/helpers'
import { useDispatch, useSelector } from 'shared/types/redux'
import { AuthSelectors, MessengerSelectors } from 'shared/selectors'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'
import { notifyActions } from 'app/lib/components/notificationsReducer'

const WithNotifications = () => {
  const { theme } = useTheme()
  const { subscribes } = useAuthSocket()
  const userId = useSelector(AuthSelectors.userId)
  const selectedRoom = useSelector(MessengerSelectors.selectedId)
  const helpers = new Helpers()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    // remove this
    subscribes.onReceivedNotification((message) => {
      console.log(message)
      if (message.senderId !== userId && message.roomId !== selectedRoom) {
        toast(`🦄 ${helpers.toNormalName(message.user)}: 
        ${helpers.cropped(message.messageText, 13)}`, { onClick: () => router.push(routes.MESSENGER) })
        dispatch(notifyActions.addNotification(message))
      }
    })
  }, [selectedRoom])

  return <ToastContainer
    position={'bottom-right'}
    theme={theme}
    limit={1}

    autoClose={1500}
  />
}


export default WithNotifications
