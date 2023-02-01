import {FC, ReactNode, useEffect} from 'react';
import {Preloader} from 'shared/ui'
import {useRedirect} from "./hooks/useRedirect";
import {useDispatch} from "shared/config/types/redux";
import {getMe} from "widgets/Login/store/thunks/getToken";

const AuthGuard: FC<{ children: ReactNode }> = ({children}) => {
    const isLoading = useRedirect()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    return <>
        {isLoading ? children : <Preloader/>}
    </>
}

export default AuthGuard
