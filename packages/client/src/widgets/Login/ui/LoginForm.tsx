import {FC} from 'react';
import {AuthTemplate} from 'entities/Auth/AuthTemplate';
import {HeadField} from 'mui';
import {useForm} from 'react-hook-form';
import {LoginForm} from '../types';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../lib/formSchemes';
import {useSubmitForm} from '../lib/hooks';
import GoogleButton from './GoogleButton';
import {createFieldValues} from 'shared/helpers/others/formHelpers';

const LoginForm: FC = () => {
  const form = useForm<LoginForm>({resolver: yupResolver(loginSchema)});
  const onSubmit = useSubmitForm(form.setError);
  const reg = createFieldValues<LoginForm>(form);

  return <AuthTemplate submit={form.handleSubmit(onSubmit)} GoogleButton={GoogleButton}>
    <HeadField title={'Email'} values={reg('email')}/>
    <HeadField title={'Password'} isPassword values={reg('password')}/>
  </AuthTemplate>;
};

export default LoginForm;
