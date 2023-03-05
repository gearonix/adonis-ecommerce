import { AnyAction, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const notifyMiddleware: Middleware = () => (next) => (action: AnyAction) => {
  next(action)
  if (action?.meta?.requestStatus === 'rejected') {
    const axiosMessage = action?.error?.message
    const message = action?.payload || 'An error has occurred.'
    // ERR_CONNECTION_REFUSED handling
    if (axiosMessage === 'Network Error') {
      return toast.error('Please check your internet connection.', {
        hideProgressBar: true

      })
    }
    toast.warn(process.env.IS_DEV ? axiosMessage : message)
  }
}
