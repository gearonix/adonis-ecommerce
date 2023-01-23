import {NCT} from 'types/global'
import Head from "next/head";
import {LoginForm} from 'components/pages/auth';

const Login: NCT = () => {
    return <>
        <Head>
            <title>Adonis - Login</title>
        </Head>
        <LoginForm/>
    </>
}

export default Login
