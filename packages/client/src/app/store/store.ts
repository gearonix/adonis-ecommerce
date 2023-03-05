import { configureStore } from '@reduxjs/toolkit'
import { createReducers } from './config/createReducers'
import { CreateMiddleWare, createMiddleware } from 'app/store/config/createMiddleware'
import { createReducerManager } from 'app/store/reducerManager'
import { DevStore } from '__DEV__/components'


interface CreateStoreConfig{
  middleware: CreateMiddleWare
}

const createStore = (config: CreateStoreConfig) => {
  const rootReducers = createReducers()
  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce,
    middleware: createMiddleware(config.middleware),
    preloadedState: DevStore.get()
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export default createStore
