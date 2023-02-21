import {useState} from 'react'

export const useBooleanState = (initialValue = false) => {
  const [isOpen, setIsOpened] = useState<boolean>(initialValue)

  const close = () => setIsOpened(false)
  const open = () => setIsOpened(true)
  const toggle = () => setIsOpened(!isOpen)

  return {
    close, open, toggle, isOpen,
  }
}
