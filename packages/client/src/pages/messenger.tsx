import Head from 'next/head'
import { FC } from 'react'
import { WithSpring } from 'shared/lib/components'
import { MessengerAside, MessengerContent, MessengerHeader } from 'widgets/Messenger'

const Messenger: FC = () => {
  return <>
    <Head>
      <title>Adonis - Messenger</title>
    </Head>
    <WithSpring className={'messenger_page'}>
      <MessengerAside/>
      <div style={{ width: '88%' }}>
        <MessengerHeader/>
        <MessengerContent/>
      </div>
    </WithSpring>

  </>
}

export default Messenger
