import {NCT} from 'types/global'
import {HeadField} from "components/UIkit/mui/mui_components";
import RegTemplate from "../auth_template/auth_template";

const SalesmanForm: NCT = () => {
    return <RegTemplate mode={'signup'}>
        <HeadField title={'Name'}/>
        <HeadField title={'Surname'}/>
        <HeadField title={'Email'}/>
        <HeadField title={'Password'} isPassword/>
    </RegTemplate>
}

export default SalesmanForm
