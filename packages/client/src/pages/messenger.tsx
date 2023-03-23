import Head from 'next/head'
import React, { FC, useEffect } from 'react'
import { DynamicModuleLoader, WithSpring } from 'shared/lib/components'
import { MessengerAside, MessengerContent, MessengerHeader, MessengerSelectors, messengerSlice } from
  'widgets/Messenger'
import { ExtraServices } from 'entities/Banners'
import { RecommendedItems } from 'widgets/Products'
import { SortedProducts } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { SocketProvider } from 'widgets/Messenger'
import { ContainerTitle } from 'shared/ui/kit'
import { useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'widgets/Login'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'


const Messenger: FC = () => {
  const isSelected = useSelector(MessengerSelectors.selectedId)
  const userName = useSelector(AuthSelectors.userName)
  const { t } = useTranslation()

  return <div>
    <Head>
      <title>Adonis - Messenger</title>
    </Head>
    <ContainerTitle>{t('Messenger')} ({userName})</ContainerTitle>
    <WithSpring className={cn('messenger_page', { selected: isSelected })}>
      <MessengerAside/>
      <div className={cn('messenger_block')}>
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
