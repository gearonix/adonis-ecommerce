import { useEffect } from 'react'

// !!!
// This file is for development mode only. 

export const useDevStore = (store: any) => {
  useEffect(() => {
    if (window) {
      if (store) {
        // @ts-ignore
        window.s = process.env.IS_DEV ? store.getState : null
        if (process.env.NODE_ENV === 'development') {
          window.localStorage.setItem('DEV_STORE', JSON.stringify(store.getState()))
        }
      }
    }
  }, [store])
}

