import { configureStore } from '@reduxjs/toolkit'
import { createReducers } from './config/createReducers'
import { CreateMiddleWare, createMiddleware } from 'app/store/config/createMiddleware'
import { createReducerManager } from 'app/store/reducerManager'
import { StateSchema } from 'app/store/types'


interface CreateStoreConfig{
  middleware: CreateMiddleWare
}

const createStore = (config: CreateStoreConfig) => {
  const rootReducers = createReducers()

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce,
    middleware: createMiddleware(config.middleware)
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export default createStore
