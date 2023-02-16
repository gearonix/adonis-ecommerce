import Head from 'next/head';
import {NotFoundComponent} from 'entities/Others';
import {FC} from 'react';

const NotFound: FC = () => {
  return <>
    <Head>
      <title>Adonis - Page not found</title>
    </Head>
    <NotFoundComponent/>

  </>;
};

export default NotFound;
