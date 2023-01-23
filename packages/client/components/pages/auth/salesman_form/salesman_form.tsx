import {NCT} from 'types/global'
import {MuiLoginField} from "components/UIkit/mui/mui_components";
import RegTemplate from "../auth_template/auth_template";

const SalesmanForm: NCT = () => {
    return <RegTemplate mode={'signup'}>
        <MuiLoginField title={'Name'}/>
        <MuiLoginField title={'Surname'}/>
        <MuiLoginField title={'Email'}/>
        <MuiLoginField title={'Password'} isPassword/>
    </RegTemplate>
}

export default SalesmanForm
