import Head from "next/head";
import {LoginForm} from 'widgets/Login';
import {FC} from "react";

const Login: FC = () => {
    return <>
        <Head>
            <title>Adonis - Login</title>
        </Head>
        <LoginForm/>
    </>
}

export default Login
