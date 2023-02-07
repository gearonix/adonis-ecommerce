import Head from 'next/head';
import {WithSpring} from 'shared/lib/animations';
import {CustomerForm} from 'widgets/Login';

const Customer = () => {
    return <WithSpring>
        <Head>
            <title>Adonis - Sign up as customer</title>
        </Head>
        <CustomerForm/>

    </WithSpring>;
};

export default Customer;
