import { RequiredState, StateSchema, StoreWithManager } from 'app/store/types'
import { AnyAction, ReducersMapObject } from '@reduxjs/toolkit'
import { CFC } from 'shared/types/components'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Reducer, useEffect } from 'react'
import { AppState } from 'shared/types/redux'
import { useRouter } from 'next/router'
import { Display } from 'shared/lib/components'

interface Props{
  name: keyof StateSchema
    reducer: Reducer<any, AnyAction>
}


const DynamicModuleLoader: CFC<Props> = ({ name, reducer, children }) => {
  const store = useStore() as StoreWithManager
  const dispatch = useDispatch()
  const isExists = useSelector((state: AppState) => !!state[name])
  const { isReady } = useRouter()

  useEffect(() => {
    if (!isReady) return
    store.reducerManager.add(name, reducer)

    dispatch({ type: `@INIT ${name}` })
  }, [isReady])


  useEffect(() => {
    return () => {
      if (!process.env.IS_DEV) {
        store.reducerManager.remove(name)
        dispatch({ type: `@DESTROY ${name}` })
      }
    }
  }, [])

  return <Display when={isExists}>
    {children}
  </Display>
}


export default DynamicModuleLoader
