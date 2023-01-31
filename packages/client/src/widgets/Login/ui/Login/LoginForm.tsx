import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from 'mui';
import {useForm} from "react-hook-form";

const LoginForm: FC = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return <AuthTemplate mode={'login'} submit={handleSubmit(onSubmit)}>
        <HeadField title={'Username'} options={{...register('username')}}/>
        <HeadField title={'Password'} isPassword options={{...register('password')}}/>
    </AuthTemplate>
}

export default LoginForm
