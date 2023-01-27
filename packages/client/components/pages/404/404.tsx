import Head from "next/head";
import {FC} from "react";
import {NotFoundComponent} from "entities/Others";

const NotFound: FC = () => {
    return <>
        <Head>
            <title>Adonis - Page not found</title>
        </Head>
        <NotFoundComponent/>
    </>
}

export default NotFound
