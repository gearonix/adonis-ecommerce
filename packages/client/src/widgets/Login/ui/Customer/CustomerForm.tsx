import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from "mui";

const CustomerForm: FC = () => {
    return <AuthTemplate mode={"signup"}>
        <HeadField title={'Email'}/>
        <HeadField title={'Password'} isPassword/>
        <HeadField title={'Repeat password'} isPassword/>
    </AuthTemplate>
}

export default CustomerForm
