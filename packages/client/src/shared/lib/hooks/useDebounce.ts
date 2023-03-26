import { MutableRefObject, useCallback, useRef } from 'react'

export const useDebounce = (callback: () => void, delay: number) => {
  const debounceRef = useRef() as MutableRefObject<any>

  return useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      callback()
    }, delay)
  }, [callback, delay])
}
