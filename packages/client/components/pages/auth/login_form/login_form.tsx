import {NCT} from 'types/global'
import RegTemplate from "../auth_template/auth_template";
import {MuiLoginField} from 'components/UIkit/mui/mui_components';

const LoginForm: NCT = () => {
    return <RegTemplate mode={'login'}>
        <MuiLoginField title={'Username'}/>
        <MuiLoginField title={'Password'}/>
    </RegTemplate>
}

export default LoginForm
