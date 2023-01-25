import {NCT} from 'types/global'
import RegTemplate from "../auth_template/auth_template";
import {HeadField} from "components/UIkit/mui/mui_components";

const CustomerForm: NCT = () => {
    return <RegTemplate mode={'signup'}>
        <HeadField title={'Email'}/>
        <HeadField title={'Password'} isPassword/>
        <HeadField title={'Repeat password'} isPassword/>
    </RegTemplate>
}

export default CustomerForm

