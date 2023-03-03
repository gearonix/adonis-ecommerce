import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T | any>(null)
  useEffect(() => {
    const stored = localStorage.getItem(key)
    setValue(stored as T ?? defaultValue)
  }, [])

  useEffect(() => {
    if (value === null) return
    localStorage.setItem(key, value as string)
  }, [value])

  return { value: value ?? defaultValue, save: setValue } as const
}
