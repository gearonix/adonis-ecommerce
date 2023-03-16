import Head from 'next/head'
import React, { FC, useEffect } from 'react'
import { DynamicModuleLoader, WithSpring } from 'shared/lib/components'
import { MessengerAside, MessengerContent, MessengerHeader, messengerSlice } from 'widgets/Messenger'
import { ExtraServices } from 'entities/Banners'
import { RecommendedItems } from 'widgets/Products'
import { SortedProducts } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { SocketProvider } from 'widgets/Messenger'
import { useRouter } from 'next/router'


const Messenger: FC = () => {
  return <div>
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
  </div>
}

const MessengerBuilder: FC = () => {
  return <SocketProvider>
    <DynamicModuleLoader name={'messenger'} reducer={messengerSlice}>
      <Messenger/>
    </DynamicModuleLoader>
  </SocketProvider>
}

export default MessengerBuilder
