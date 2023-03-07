import { useEffect } from 'react'

export const useInterval = (handler: () => void, seconds: number) => {
  useEffect(() => {
    const interval = setInterval(handler, seconds * 1000)
    return () => {
      clearInterval(interval)
    }
  })
}
