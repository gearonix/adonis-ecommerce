import {AboutComponent} from 'entities/Others';
import Head from 'next/head';
import {FC} from "react";

const AboutPage: FC = () => {
    return <>
        <Head>
            <title>Adonis - About us</title>
        </Head>
        <AboutComponent/>
    </>
}

export default AboutPage
