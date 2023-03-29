import { Provider } from 'react-redux'
import { CFC } from 'shared/types/components'
import { DevGlobalVars } from 'dev/components'
import createStore from 'app/store/store'
import { useEffect, useState } from 'react'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { useRouter } from 'next/router'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'
import { NextLocalStorage } from 'shared/lib/helpers'

interface StoreProviderProps{
  asyncReducers?: ReducersMapObject<StateSchema>,
  preloadedState?: DeepPartial<StateSchema>
}

const StoreProvider: CFC<StoreProviderProps> = ({ children, asyncReducers, preloadedState }) => {
  const [store, setStore] = useState<ToolkitStore>()
  const router = useRouter()
  const storage = new NextLocalStorage()

  useEffect(() => {
    const store = createStore({
      middleware: {
        redirect: router.push,
        storage
      },
      asyncReducers,
      preloadedState
    })

    setStore(store)
  }, [])

  DevGlobalVars.setStore(store)

  return store ? <Provider store={store}>
    {children}
  </Provider> : null
}

export default StoreProvider
