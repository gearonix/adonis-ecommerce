import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch } from 'shared/types/redux'
import { Preloader } from 'shared/ui/kit'
import { authorizeUser } from 'widgets/Login/store/thunks/authorizeUser'


const Authorization: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    dispatch(authorizeUser()).then(() => setIsLoaded(true))
  }, [])

  return <>
    {isLoaded ? children : <Preloader/>}

  </>
}

export default Authorization
