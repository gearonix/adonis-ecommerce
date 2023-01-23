import {MessagesHeader, MessagesMain, MessagesNav} from 'components/pages/messenger'
import Head from 'next/head'
import {NCT} from 'types/global'

const Messenger: NCT = () => {
    return <>
        <Head>
            <title>Adonis - Messenger</title>
        </Head>
        <div className={'messenger_page'}>
            <MessagesNav/>
            <div style={{width: '88%'}}>
                <MessagesHeader/>
                <MessagesMain/>
            </div>
        </div>

    </>
}

export default Messenger
