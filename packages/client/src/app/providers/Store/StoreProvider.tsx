import { Provider } from 'react-redux'
import { CFC } from 'shared/types/components'
import { useDevStore } from '../../../../dev/components/useDevStore'
import createStore from 'app/store/store'
import { useEffect, useState } from 'react'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { useRouter } from 'next/router'

const StoreProvider: CFC = ({ children }) => {
  const [store, setStore] = useState<ToolkitStore>()
  const router = useRouter()

  useEffect(() => {
    const storeConfig = {
      middleware: {
        redirect: router.push
      }
    }


    const store = createStore(storeConfig)
    setStore(store)
  }, [])


  useDevStore(store)
  return store ? <Provider store={store}>
    {children}
  </Provider> : null
}

export default StoreProvider
