import {FC, ReactNode, useEffect, useState} from 'react'
import {authByCookie} from 'widgets/Login'
import {useDispatch} from 'shared/types/redux'
import {Preloader} from 'shared/ui/kit'


const AsyncAuthorization: FC<{ children: ReactNode }> = ({children}) => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    dispatch(authByCookie()).then(() => setIsLoaded(true))
  }, [])

  return <>
    {isLoaded ? children : <Preloader/>}

  </>
}

export default AsyncAuthorization
