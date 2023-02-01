import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from 'mui';
import {useForm} from "react-hook-form";
import {LoginFormValues} from "widgets/Login/types/types";
import {loginUser} from "../../store/thunks/loginThunk";
import {useDispatch} from "shared/config/types/redux";
import {useRouter} from 'next/router';

const LoginForm: FC = () => {
    const {register, handleSubmit} = useForm<LoginFormValues>();
    const dispatch = useDispatch()
    const router = useRouter();


    const onSubmit = async (formValues: LoginFormValues) => {
        const {meta} = await dispatch(loginUser(formValues))
        if (meta.requestStatus == 'fulfilled') {
            router.push('/profile')
        }
    }

    return <AuthTemplate mode={'login'} submit={handleSubmit(onSubmit)}>
        <HeadField title={'Email'} options={register('email')}/>
        <HeadField title={'Password'} isPassword options={register('password')}/>
    </AuthTemplate>
}

export default LoginForm
