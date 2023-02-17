import {useState} from 'react'

export const useBooleanState = () => {
  const [isOpen, setIsOpened] = useState<boolean>(false)

  const close = () => setIsOpened(false)
  const open = () => setIsOpened(true)
  const toggle = () => setIsOpened(!isOpen)

  return {
    close, open, toggle, isOpen,
  }
}
