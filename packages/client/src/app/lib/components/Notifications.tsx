import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from 'shared/lib/hooks'

const Notifications = () => {
  const { theme } = useTheme()
  return <ToastContainer
    position={'bottom-right'}
    theme={theme}
    limit={1}

    autoClose={1500}
  />
}


export default Notifications
