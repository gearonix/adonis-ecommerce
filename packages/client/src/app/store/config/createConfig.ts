import { ReducerManager } from '../reducerManager'
import apiConfig from 'app/store/config/apiConfig'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { Extra, Redirect } from 'app/store/types'


const createExtraArg = (redirect: Redirect): Extra => ({
  api: apiConfig,
  redirect
})

const createConfig = <T>(reducerManager: ReducerManager<T>, redirect: Redirect) => ({
  reducer: reducerManager.reduce,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    thunk: {
      extraArgument: createExtraArg(redirect)
    }
  })
})


export default createConfig
