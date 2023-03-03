import { WC } from 'shared/types/components'
import createStore from 'app/store/store'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'

const StoreProvider: WC = ({ children }) => {
  const router = useRouter()

  const storeProps = {
    redirect: router.push
  }

  const store = createStore(storeProps)

  return <Provider store={store}>
    {children}
  </Provider>
}


export default StoreProvider
