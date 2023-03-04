import { AnyAction, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const notifyMiddleware: Middleware = () => (next) => (action: AnyAction) => {
  next(action)
  if (action?.meta?.requestStatus === 'rejected') {
    console.log(action)
    toast(action?.payload || 'An error has occurred :(')
  }
}
