import {NCT} from 'types/global'
import RegTemplate from "../auth_template/auth_template";
import {MuiLoginField} from "components/UIkit/mui/mui_components";

const CustomerForm: NCT = () => {
    return <RegTemplate mode={'signup'}>
        <MuiLoginField title={'Email'}/>
        <MuiLoginField title={'Password'} isPassword/>
        <MuiLoginField title={'Repeat password'} isPassword/>
    </RegTemplate>
}

export default CustomerForm

