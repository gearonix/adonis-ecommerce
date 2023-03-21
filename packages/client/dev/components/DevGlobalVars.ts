import { Socket } from 'socket.io-client'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

// !!!
// This file is for development mode only.

export const DevGlobalVars = {
  setStore(store: ToolkitStore) {
    if (!process.env.IS_DEV) return

    if (typeof window !== 'undefined' && store) {
      // @ts-ignore
      window.s = process.env.IS_DEV ? store.getState : null
    }
  },
  setSocket(key: string, socket: Socket) {
    if (!process.env.IS_DEV) return
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window[key] = socket
    }
  }
}
