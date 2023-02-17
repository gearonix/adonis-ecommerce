import Head from 'next/head'
import {WithSpring} from 'shared/ui/animations'
import {FC} from 'react'
import {MessengerAside} from 'widgets/Messenger/Aside'
import {MessengerContent} from 'widgets/Messenger/Content'
import {MessengerHeader} from 'widgets/Messenger/Header'

const Messenger: FC = () => {
  return <>
    <Head>
      <title>Adonis - Messenger</title>
    </Head>
    <WithSpring className={'messenger_page'}>
      <MessengerAside/>
      <div style={{width: '88%'}}>
        <MessengerHeader/>
        <MessengerContent/>
      </div>
    </WithSpring>

  </>
}

export default Messenger
