import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { createReducers } from './config/createReducers'
import { CreateMiddleWare, createMiddleware } from 'app/store/config/createMiddleware'
import { createReducerManager } from 'app/store/reducerManager'
import { StateSchema } from 'app/store/types'


type CreateStoreConfig = Partial<{
  middleware: CreateMiddleWare,
  asyncReducers: ReducersMapObject<StateSchema>,
  preloadedState: Partial<StateSchema>
}>

export type Store = ReturnType<typeof createStore>

const createStore = (config: CreateStoreConfig) => {
  const rootReducers = createReducers(config.asyncReducers)
  const reducerManager = createReducerManager(rootReducers)
  const middleware = createMiddleware(config.middleware)
  const preloadedState = config.preloadedState || {}

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce,
    middleware,
    preloadedState
  })


  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export default createStore
