import {useDispatch} from 'shared/types/redux'
import {Forms, SignupForm} from 'widgets/Login/types'
import {loginUser, makeRegistration} from 'widgets/Login/thunks'
import {UserRoles} from 'app/config/globals'
import {UseFormSetError} from 'react-hook-form'
import {onThunkError} from 'shared/lib/helpers/others/httpHelpers'


const isRegistration = (formValues: Forms): formValues is SignupForm => {
  return 'repeatPassword' in formValues
}

export const useSubmitForm = (setError: UseFormSetError<any>, role ?: UserRoles) => {
  const dispatch = useDispatch()

  return async (formValues: Forms) => {
    let response: any
    if (!isRegistration(formValues)) {
      response = await dispatch(loginUser(formValues))
    } else {
      response = await dispatch(makeRegistration({...formValues, role: role as UserRoles}))
    }

    const onError = onThunkError(response)

    onError(() => setError('password', {message: response.payload as string}))
  }
}
