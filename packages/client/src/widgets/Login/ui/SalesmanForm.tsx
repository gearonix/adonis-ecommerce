import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from "mui";
import {useForm} from "react-hook-form";
import {SignupForm} from "../types";
import {yupResolver} from "@hookform/resolvers/yup";
import {salesmanSchema} from "../lib/formSchemes";
import {useSubmitForm} from "../lib/hooks";
import {Roles} from "shared/types/globals";
import {createFieldValues} from "../lib/helpers";
import GoogleButton from "widgets/Login/ui/GoogleButton";

const SalesmanForm: FC = () => {
    const form = useForm<SignupForm>({resolver: yupResolver(salesmanSchema)});
    const onSubmit = useSubmitForm(form.setError, Roles.SALESMAN)
    const reg = createFieldValues(form)

    return <AuthTemplate mode={'signup'} submit={form.handleSubmit(onSubmit)}
                         GoogleButton={GoogleButton} role={Roles.SALESMAN}>
        <HeadField title={'Name'} values={reg('first_name')}/>
        <HeadField title={'Surname'} values={reg('last_name')}/>
        <HeadField title={'Email'} values={reg('email')}/>
        <HeadField title={'Password'} isPassword values={reg('password')}/>
        <HeadField title={'Repeat password'} isPassword values={reg('repeatPassword')}/>
    </AuthTemplate>
}

export default SalesmanForm
