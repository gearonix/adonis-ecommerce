import { useEffect, useState } from 'react'

export const useTimeout = (timing = 1800) => {
  const [isShow, setShow] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), timing)
    return () => clearTimeout(timeout)
  }, [])

  return isShow
}
