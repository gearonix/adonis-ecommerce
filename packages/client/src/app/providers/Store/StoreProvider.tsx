import { Provider } from 'react-redux'
import { CFC } from 'shared/types/components'
import { useDevStore } from 'dev/components'
import createStore from 'app/store/store'
import { useEffect, useState } from 'react'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { useRouter } from 'next/router'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'

interface StoreProviderProps{
  asyncReducers?: ReducersMapObject<StateSchema>,
  preloadedState?: DeepPartial<StateSchema>
}

const StoreProvider: CFC<StoreProviderProps> = ({ children, asyncReducers, preloadedState }) => {
  const [store, setStore] = useState<ToolkitStore>()
  const router = useRouter()

  useEffect(() => {
    const store = createStore({
      middleware: {
        redirect: router.push
      },
      asyncReducers,
      preloadedState
    })

    setStore(store)
  }, [])

  useDevStore(store)

  return store ? <Provider store={store}>
    {children}
  </Provider> : null
}

export default StoreProvider
