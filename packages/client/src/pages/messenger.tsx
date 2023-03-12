import Head from 'next/head'
import React, { FC } from 'react'
import { WithSpring } from 'shared/lib/components'
import { MessengerAside, MessengerContent, MessengerHeader } from 'widgets/Messenger'
import { ExtraServices } from 'entities/Banners'
import { RecommendedItems } from 'widgets/Products'
import { SortedProducts } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { SocketProvider } from 'widgets/Messenger'


const Messenger: FC = () => {
  return <SocketProvider>
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
    <ExtraServices/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[2]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[4]}/>
  </SocketProvider>
}

export default Messenger
