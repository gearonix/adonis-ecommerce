import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from "mui";

const SalesmanForm: FC = () => {
    return <AuthTemplate mode={'signup'}>
        <HeadField title={'Name'}/>
        <HeadField title={'Surname'}/>
        <HeadField title={'Email'}/>
        <HeadField title={'Password'} isPassword/>
    </AuthTemplate>
}

export default SalesmanForm
