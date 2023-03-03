import { configureStore } from '@reduxjs/toolkit'
import { createReducers } from './config/createReducers'
import { createReducerManager } from './reducerManager'
import createConfig from 'app/store/config/createConfig'
import { CreateStoreProps } from 'app/store/types'


export const createStore = ({ redirect }: CreateStoreProps) => {
  const rootReducers = createReducers()

  const reducerManager = createReducerManager(rootReducers)
  // @ts-ignore
  const store = configureStore(createConfig(reducerManager, redirect))
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export default createStore

