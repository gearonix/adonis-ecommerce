import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from 'mui';
import {useForm} from "react-hook-form";
import {LoginFormValues} from "widgets/Login/types/types";
import {loginUser} from "../../store/thunks/loginThunk";
import {useDispatch} from "shared/config/types/redux";

const LoginForm: FC = () => {
    const {register, handleSubmit} = useForm<LoginFormValues>();
    const dispatch = useDispatch()

    const onSubmit = (formValues: LoginFormValues) => {
        dispatch(loginUser(formValues))
    }

    return <AuthTemplate mode={'login'} submit={handleSubmit(onSubmit)}>
        <HeadField title={'Email'} options={{...register('email')}}/>
        <HeadField title={'Password'} isPassword options={{...register('password')}}/>
    </AuthTemplate>
}

export default LoginForm
