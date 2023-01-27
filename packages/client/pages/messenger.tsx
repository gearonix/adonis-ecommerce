import Head from 'next/head'
import {NCT} from 'types/global'
import {MessengerAside} from 'widgets/Messenger/Aside'
import {MessengerContent} from 'widgets/Messenger/Content'
import {MessengerHeader} from 'widgets/Messenger/Header'

const Messenger: NCT = () => {
    return <>
        <Head>
            <title>Adonis - Messenger</title>
        </Head>
        <div className={'messenger_page'}>
            <MessengerAside/>
            <div style={{width: '88%'}}>
                <MessengerHeader/>
                <MessengerContent/>
            </div>
        </div>

    </>
}

export default Messenger
