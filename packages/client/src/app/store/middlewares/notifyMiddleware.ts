import { AnyAction, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const notifyMiddleware: Middleware = () => (next) => (action: AnyAction) => {
  next(action)
  if (action?.meta?.requestStatus === 'rejected') {
    const axiosMessage = action?.error?.message
    const message = action?.payload
    if (message === 'An error was occurred.') return

    // ERR_CONNECTION_REFUSED handling
    if (axiosMessage === 'Network Error') {
      return toast.error('Please check your internet connection.', {
        hideProgressBar: true
      })
    }
    if (message === 'Please sign in') {
      return toast.info(message)
    }
    toast.warn(message)
  }
}
