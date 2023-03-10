
// !!!
// This file is for development mode only.

export const DevStore = {
  get() {
    if (window) {
      if (process.env.NODE_ENV === 'development') {
        window.onbeforeunload = () => {
          localStorage.removeItem('DEV_STORE')
        }
        return JSON.parse(window.localStorage.getItem('DEV_STORE') || '{}') || undefined
      }
    }
    return null
  },
  set(state: any) {
    if (window) {
      if (process.env.NODE_ENV === 'development') {
        window.onbeforeunload = () => {
          localStorage.removeItem('DEV_STORE')
        }
        window.localStorage.setItem('DEV_STORE', JSON.stringify(state))
      }
    }
    return null
  }
}
