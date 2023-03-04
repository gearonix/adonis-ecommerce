import { Provider } from 'react-redux'
import { CWC } from 'shared/types/components'
import { useDevStore } from '../../../../dev/components/useDevStore'
import createStore from 'app/store/store'
import { useEffect, useState } from 'react'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

const StoreProvider: CWC = ({ children }) => {
  const [store, setStore] = useState<ToolkitStore>()
  useEffect(() => {
    const store = createStore()
    setStore(store)
  }, [])


  useDevStore(store)
  return store ? <Provider store={store}>
    {children}
  </Provider> : null
}

export default StoreProvider
