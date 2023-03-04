import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiConfig } from './apiConfig'
import { Redirect } from 'app/store/types'

export interface CreateMiddleWare{
  redirect: Redirect
}

export const createMiddleware = (config: CreateMiddleWare) => getDefaultMiddleware({
  thunk: {
    extraArgument: {
      api: apiConfig,
      ...config
    }
  }
})
