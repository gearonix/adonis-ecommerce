import {useDispatch} from "shared/types/redux";
import {useRouter} from "next/router";
import {Forms, SignupForm} from "widgets/Login/types";
import {loginUser, makeRegistration} from "widgets/Login/store/thunks";
import {Paths, Roles} from "shared/types/globals";
import {UseFormSetError} from "react-hook-form";


const isRegistration = (formValues: Forms): formValues is SignupForm => {
    return 'repeatPassword' in formValues
}

export const useSubmitForm = (errorHandler: UseFormSetError<any>, role ?: Roles) => {
    const dispatch = useDispatch()
    const router = useRouter();

    return async (formValues: Forms) => {
        let response;
        if (!isRegistration(formValues)) {
            response = await dispatch(loginUser(formValues))
        } else {
            response = await dispatch(makeRegistration({...formValues, role: role as Roles}))
        }

        if (response.meta.requestStatus === 'rejected') {
            return errorHandler('password', {message: response.payload as string})
        }
        router.push(Paths.PROFILE)

    }
}
