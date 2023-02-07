import Head from 'next/head';
import {FC} from 'react';
import {ContainerTitle} from 'shared/ui';
import {CartItems} from 'widgets/Cart/CartItems';
import {RemoveAllSaved, RemoveFromSaved} from 'features/Saved';
import {Recommended} from 'widgets/SearchLists';
import {GithubBanner} from 'entities/Banners/GithubBanner';
import {WithSpring} from 'shared/lib/animations';

const Saved: FC = () => {
    return <WithSpring>
        <Head>
            <title>Adonis - Saved</title>
        </Head>
        <ContainerTitle>Saved products</ContainerTitle>
        <CartItems Add={null} Remove={RemoveFromSaved} RemoveAll={RemoveAllSaved}/>
        <Recommended/>
        <GithubBanner/>
    </WithSpring>;
};

export default Saved;
