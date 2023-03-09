import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { createReducers } from './config/createReducers'
import { CreateMiddleWare, createMiddleware } from 'app/store/config/createMiddleware'
import { createReducerManager } from 'app/store/reducerManager'
import { DevStore } from 'dev/components'
import { OptionalReducers, StateSchema } from 'app/store/types'


type CreateStoreConfig = Partial<{
  middleware: CreateMiddleWare,
  asyncReducers: ReducersMapObject<StateSchema>,
  preloadedState: DeepPartial<StateSchema>
}>

export type Store = ReturnType<typeof createStore>

const createStore = (config: CreateStoreConfig) => {
  const rootReducers = createReducers(config.asyncReducers)
  const reducerManager = createReducerManager(rootReducers)


  const preloadedState = config.preloadedState || DevStore.get() || {}

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce,
    middleware: createMiddleware(config.middleware),
    preloadedState
  })


  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export default createStore
