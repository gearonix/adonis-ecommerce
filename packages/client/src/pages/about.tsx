import {AboutComponent} from 'entities/Others';
import Head from 'next/head';
import {WithSpring} from 'shared/lib/animations';
import {FC} from "react";

const AboutPage: FC = () => {
    return <WithSpring type={'opacityScale'}>
        <Head>
            <title>Adonis - About us</title>
        </Head>
        <AboutComponent/>
    </WithSpring>
}

export default AboutPage
