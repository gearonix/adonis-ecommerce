import {SignupChoice} from 'entities/Auth/Choice';
import Head from 'next/head';
import {WithSpring} from 'shared/lib/animations';


const SignUp = () => {
    return <WithSpring>
        <Head>
            <title>Adonis - Sign up</title>
        </Head>
        <SignupChoice/>

    </WithSpring>;
};

export default SignUp;
