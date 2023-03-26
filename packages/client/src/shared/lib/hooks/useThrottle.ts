import { useCallback, useRef } from 'react'

export const useThrottle = (callback: () => void, delay: number) => {
  const throttleRef = useRef(false)

  return useCallback(() => {
    if (!throttleRef.current) {
      callback()
      throttleRef.current = true

      setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [callback, delay])
}
