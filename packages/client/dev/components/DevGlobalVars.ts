import { Socket } from 'socket.io-client'

// !!!
// This file is for development mode only.

export const DevGlobalVars = {
  setStore(store: any) {
    if (!process.env.IS_DEV) return

    if (typeof window !== 'undefined' && store) {
      // @ts-ignore
      window.s = process.env.IS_DEV ? store.getState : null
      // window.localStorage.setItem('DEV_STORE', JSON.stringify(store.getState()))
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
