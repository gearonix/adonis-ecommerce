import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from 'mui';

const LoginForm: FC = () => {
    return <AuthTemplate mode={'login'}>
        <HeadField title={'Username'}/>
        <HeadField title={'Password'} isPassword/>
    </AuthTemplate>
}

export default LoginForm
