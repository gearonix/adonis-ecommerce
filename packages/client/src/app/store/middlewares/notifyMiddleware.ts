import { AnyAction, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const notifyMiddleware: Middleware = () => (next) => (action: AnyAction) => {
  next(action)
  if (action?.meta?.requestStatus === 'rejected') {
    const message = action?.payload
    if (message === 'An error was occurred.') return

    if (message === 'Please sign in') {
      return toast.info(message)
    }
    toast.warn(message)
  }
}
