import NotFoundComponent from 'components/pages/404/404'
import Head from 'next/head'
import {NCT} from 'types/global'

const NotFound: NCT = () => {
    return <>
        <Head>
            <title>Adonis - Page not found</title>
        </Head>
        <NotFoundComponent/>

    </>
}

export default NotFound
