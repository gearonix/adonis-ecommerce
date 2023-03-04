import { configureStore } from '@reduxjs/toolkit'
import { createReducers } from './createReducers'
import { createMiddleware } from 'app/store/config/createMiddleware'


const createStore = () => {
  const store = configureStore({
    reducer: createReducers(),
    middleware: createMiddleware()
  })

  return store
}

export default createStore
