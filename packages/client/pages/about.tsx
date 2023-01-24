import {NCT} from 'types/global'
import About from 'components/pages/about/about';
import Head from 'next/head';

const AboutPage: NCT = () => {
    return <>
        <Head>
            <title>Adonis - About us</title>
        </Head>
        <About/>
        </>
}

export default AboutPage
