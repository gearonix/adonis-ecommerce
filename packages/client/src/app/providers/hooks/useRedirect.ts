import {useEffect, useState} from "react";
import Selectors from "shared/model/selectors";
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import {Paths, privatePaths} from "app/config/paths";
import {AppState} from "shared/config/types/redux";

export const useRedirect = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter()
    const user_id = useSelector(Selectors.userId)
    const isUserDataLoading = useSelector((state: AppState) => state.user.isLoading) as boolean

    const hideContent = () => setIsLoaded(false)
    const showContent = (path: string) => authCheck(path, user_id === null, isUserDataLoading)

    const authCheck = (url: string, notAuthorized: boolean, isLoading: boolean) => {
        const path: Paths = url.split('?')[0] as Paths
        console.log(isUserDataLoading)
        if (notAuthorized && privatePaths.includes(path) && !isLoading) {
            return router.push(Paths.LOGIN)
        }
        setIsLoaded(true)
    }

    useEffect(() => {
        showContent(router.asPath)
        router.events.on('routeChangeStart', hideContent)
        router.events.on('routeChangeComplete', showContent)
        return () => {
            router.events.off('routeChangeComplete', showContent);
            router.events.off('routeChangeStart', hideContent)
        }

    }, [user_id, isUserDataLoading])

    return isLoaded
}
