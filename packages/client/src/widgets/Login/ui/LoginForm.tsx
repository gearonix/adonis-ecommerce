import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from 'mui';
import {useForm} from "react-hook-form";
import {LoginForm} from "../types";
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from "../lib/formSchemes";
import {useSubmitForm} from '../lib/hooks';
import {createFieldValues} from "../lib/helpers";
import GoogleButton from "widgets/Login/ui/GoogleButton";
//TODO: add server error handling
const LoginForm: FC = () => {
    const form = useForm<LoginForm>({resolver: yupResolver(loginSchema)});
    const onSubmit = useSubmitForm(form.setError);
    const reg = createFieldValues(form)

    return <AuthTemplate mode={'login'} submit={form.handleSubmit(onSubmit)}>
        <HeadField title={'Email'} values={reg('email')}/>
        <HeadField title={'Password'} isPassword values={reg('password')}/>
        <GoogleButton mode={'login'}/>
    </AuthTemplate>
}

export default LoginForm
