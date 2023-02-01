import {FC, ReactNode, useEffect, useState} from 'react';
import {getMe} from "widgets/Login/store/thunks/getToken";
import {useDispatch} from "shared/config/types/redux";
import {Preloader} from "shared/ui";

const AsyncAuthorization: FC<{ children: ReactNode }> = ({children}) => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getMe()).then(() => setIsLoaded(true))
    }, [])

    return <>
        {isLoaded ? children : <Preloader/>}
    </>
}

export default AsyncAuthorization
