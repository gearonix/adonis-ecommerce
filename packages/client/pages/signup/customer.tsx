import Head from "next/head"
import {CustomerForm} from "widgets/Login";

const Customer = () => {
    return <>
        <Head>
            <title>Adonis - Sign up as customer</title>
        </Head>
        <CustomerForm/>

    </>
}

export default Customer;
