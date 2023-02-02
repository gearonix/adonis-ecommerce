import {useDispatch} from "shared/types/redux";
import {useRouter} from "next/router";
import {Forms, SignupForm} from "widgets/Login/types";
import {loginUser, makeRegistration} from "widgets/Login/store/thunks";
import {Paths, Roles} from "shared/types/globals";


const isRegistration = (formValues: Forms): formValues is SignupForm => {
    return 'repeatPassword' in formValues
}

export const useSubmitForm = (role ?: Roles) => {
    const dispatch = useDispatch()
    const router = useRouter();

    return async (formValues: Forms) => {
        let response;
        if (!isRegistration(formValues)) {
            response = await dispatch(loginUser(formValues))
        } else {
            response = await dispatch(makeRegistration({...formValues, role: role as Roles}))
        }

        if (response.meta.requestStatus == 'fulfilled') {
            router.push(Paths.PROFILE)
        }
    }
}
