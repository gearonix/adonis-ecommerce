import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch } from 'shared/types/redux'
import { PenPreloader } from 'shared/ui/kit'
import { authorizeUser } from 'widgets/Login'
import { AuthSocketProvider } from './socket'


const Authorization: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    dispatch(authorizeUser()).then(() => setIsLoaded(true))
  }, [])

  return <AuthSocketProvider>
    {isLoaded ? children : <PenPreloader />}
  </AuthSocketProvider>
}

export default Authorization
