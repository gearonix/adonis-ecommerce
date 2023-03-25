import { FC, memo, MutableRefObject, useEffect, useRef } from 'react'
import s from './style.module.scss'
import { Message as MessageUI, ScrollToBottom, TimeLabel } from 'shared/ui/kit'
import { Message } from 'widgets/Messenger'
import { Nullable } from 'shared/types/common'
import { Display, WithSpring } from 'shared/lib/components'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { useInfiniteScroll, useTimeout, useBottomScroll } from 'shared/lib/hooks'
import { BiMessageDetail } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import { useMessengerSocket } from 'widgets/Messenger/lib/hooks'

interface Props{
  messages: Message[],
  userId: Nullable<number>,
  getMoreMessages: () => void,
  roomId: number
}

const MessengerContent: FC<Props> = (({ messages, userId, getMoreMessages, roomId }) => {
  const scrollable = useBottomScroll(roomId)
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const { subscribes } = useMessengerSocket()
  useInfiniteScroll({
    callback: getMoreMessages,
    wrapperRef: scrollable.containerRef,
    triggerRef
  })
  useEffect(() => {
    subscribes.onAddMessage(() => {
      scrollable.scrollToBottom()
      setTimeout(scrollable.scrollToBottom, 550)
    })
  }, [])

  useEffect(scrollable.rememberContainerScroll, [messages])

  return <div className={s.messages_block}>
    <div className={s.messages_wrapper} onScroll={scrollable.onScroll}
      ref={scrollable.containerRef}>
      <Display when={messages.length}>
        <div ref={triggerRef}/>
      </Display>
      {messages.map((message) => {
        return <Display when={message.roomId === roomId} key={message.messageId}>
          <MessageUI message={message}
            isMine={message.senderId === userId}
          />
        </Display>
      })}
      <div ref={scrollable.bottomRef} />
    </div>
    <div className={s.bottomWrapper}>
      <Display when={scrollable.scrollBottomSize > 100}>
        <ScrollToBottom onClick={scrollable.scrollToBottom}/>
      </Display>
    </div>
  </div>
})


export const DefaultChat: FC = () => {
  const toShow = useTimeout(300)
  const { t } = useTranslation()
  return <Display when={toShow}>
    <WithSpring className={s.default_container}>
      <div className={s.default_chat_image}>
        <BiMessageDetail/>
      </div>
      <h2 className={s.default_title}>{t('Choose a chat or create a')}
        <Link href={routes.USERS}>
          <span> {t('new one')}</span>
        </Link>
      </h2>
    </WithSpring>
  </Display>
}


export default MessengerContent
