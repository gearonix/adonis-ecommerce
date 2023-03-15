import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from 'shared/lib/hooks'
import { useAuthSocket } from 'widgets/Profile/lib/hooks/useAuthSocket'
import { Helpers } from 'shared/lib/helpers'
import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'shared/selectors'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'

const WithNotifications = () => {
  const { theme } = useTheme()
  const { subscribes } = useAuthSocket()
  const userId = useSelector(AuthSelectors.userId)
  const helpers = new Helpers()
  const router = useRouter()
  console.log(router.asPath)

  useEffect(() => {
    // remove this
    subscribes.onReceivedNotification((message) => {
      if (message.senderId !== userId && router.asPath !== routes.MESSENGER) {
        toast.info(`${message.senderId}: ${helpers.cropped(message.messageText, 13)}`)
      }
    })
  }, [])

  return <ToastContainer
    position={'bottom-right'}
    theme={theme}
    limit={1}

    autoClose={1500}
  />
}


export default WithNotifications
