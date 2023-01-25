import {NCT} from 'types/global'
import RegTemplate from "../auth_template/auth_template";
import {HeadField} from 'components/UIkit/mui/mui_components';

const LoginForm: NCT = () => {
    return <RegTemplate mode={'login'}>
        <HeadField title={'Username'}/>
        <HeadField title={'Password'}/>
    </RegTemplate>
}

export default LoginForm
