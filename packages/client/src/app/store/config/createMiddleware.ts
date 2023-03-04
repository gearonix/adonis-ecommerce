import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiConfig } from './apiConfig'

export const createMiddleware = () => getDefaultMiddleware({
  thunk: {
    extraArgument: {
      api: apiConfig
    }
  }
})
