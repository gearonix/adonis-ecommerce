import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from "mui";
import {useForm} from 'react-hook-form';
import {SignupForm} from "../types";
import {yupResolver} from '@hookform/resolvers/yup';
import {customerSchema} from "../lib/formSchemes";
import {useSubmitForm} from "../lib/hooks";
import {Roles} from 'shared/types/globals';
import {createFieldValues} from "../lib/helpers";
import GoogleButton from './GoogleButton'

//TODO: improve imports
const CustomerForm: FC = () => {
    const form = useForm<SignupForm>({resolver: yupResolver(customerSchema)});
    const onSubmit = useSubmitForm(form.setError, Roles.CUSTOMER)
    const reg = createFieldValues(form)


    return <AuthTemplate mode={"signup"} submit={form.handleSubmit(onSubmit)} GoogleButton={GoogleButton}
                         role={Roles.CUSTOMER}>
        <HeadField title={'Email'} values={reg('email')}/>
        <HeadField title={'Password'} isPassword values={reg('password')}/>
        <HeadField title={'Repeat password'} isPassword values={reg('repeatPassword')}/>
    </AuthTemplate>
}

export default CustomerForm
