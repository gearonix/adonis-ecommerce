import {FC, ReactNode, useEffect, useState} from 'react'
import {useDispatch} from 'shared/types/redux'
import {Preloader} from 'shared/ui/kit'
import {getCurrentUser} from 'widgets/Login/thunks/getCurrentUser'


const AsyncAuthorization: FC<{ children: ReactNode }> = ({children}) => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setIsLoaded(true))
  }, [])

  return <>
    {isLoaded ? children : <Preloader/>}

  </>
}

export default AsyncAuthorization
