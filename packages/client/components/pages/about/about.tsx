import {FC} from 'react'
import {AboutComponent} from 'entities/Others';
import Head from 'next/head';

const About: FC = () => {
    return <>
        <Head>
            <title>Adonis - About us</title>
        </Head>
        <AboutComponent/>
    </>
}

export default About
