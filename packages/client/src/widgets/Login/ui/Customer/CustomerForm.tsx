import {FC} from 'react';
import {AuthTemplate} from "entities/Auth/AuthTemplate";
import {HeadField} from "mui";
import {useForm} from 'react-hook-form';
import {CustomerFormValues} from "../../types/types";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from "yup";


const formSchema = Yup.object().shape({
    email: Yup.string()
        .required("Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    repeatPassword: Yup.string()
        .required("Confirm Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters")
        .oneOf([Yup.ref("password")], "Passwords do not match")
});


const CustomerForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CustomerFormValues>({resolver: yupResolver(formSchema)});

    const onSubmit = (data: CustomerFormValues) => {
        console.log(data)
    }
    console.log(errors)


    return <AuthTemplate mode={"signup"} submit={handleSubmit(onSubmit)}>
        <HeadField title={'Email'} options={register('email')} error={errors.email}/>
        <HeadField title={'Password'} isPassword options={register('password')} error={errors.password}/>
        <HeadField title={'Repeat password'} isPassword options={register('repeatPassword')}
                   error={errors.repeatPassword}/>
    </AuthTemplate>
}

export default CustomerForm
