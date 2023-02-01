import {useEffect, useState} from "react";
import Selectors from "shared/model/selectors";
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import {Paths, privatePaths} from "app/config/paths";


export const useRedirect = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter()
    const user_id = useSelector(Selectors.userId)

    const hideContent = () => setIsLoaded(false)

    const authCheck = (url: string) => {
        const path: Paths = url.split('?')[0] as Paths
        if (user_id === null && privatePaths.includes(path)) {
            return router.push(Paths.LOGIN)
        }
        setIsLoaded(true)
    }

    useEffect(() => {
        authCheck(router.asPath)
        router.events.on('routeChangeStart', hideContent)
        router.events.on('routeChangeComplete', authCheck)
        return () => {
            router.events.off('routeChangeComplete', authCheck);
            router.events.off('routeChangeStart', hideContent)
        }

    }, [user_id])

    return isLoaded
}
