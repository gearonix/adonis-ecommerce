import { FC, UIEvent, useCallback, useEffect, useRef, useState } from 'react'
import s from './style.module.scss'
import { Message as MessageUI, TimeLabel } from 'shared/ui/kit'
import { Message } from 'shared/types/slices'
import { Nullable } from 'shared/types/common'
import { Helpers } from 'shared/lib/helpers'
import { useBottomScroll } from 'shared/lib/hooks/useBottomScroll'
import { Display, WithSpring } from 'shared/lib/components'
import { selectOpponentUser } from 'widgets/Messenger/lib/helpers'

interface Props{
  messages: Message[],
  userId: Nullable<number>
}

const MessengerContent: FC<Props> = ({ messages, userId }) => {
  const helpers = new Helpers()
  const scrollable = useBottomScroll(messages)

  return <div className={s.messages_block}>
    <div className={s.messages_wrapper} onScroll={scrollable.onScroll}
      ref={scrollable.containerRef}>
      <TimeLabel/>
      {messages.map((message) => {
        return <MessageUI message={message.messageText}
          isMine={message.senderId === userId}
          key={message.messageId}
          time={helpers.reformatMysqlDate(message.creationDate, 'HH:mm')}/>
      })}
      <div ref={scrollable.bottomRef} />
    </div>
    <div className={s.bottomWrapper}>
      <Display when={scrollable.scrollBottomSize > 300}>
        <WithSpring>
          <button onClick={scrollable.scrollToBottom}
            className={s.scrollToBottom}>to bottom</button>
        </WithSpring>
      </Display>
    </div>
  </div>
}

export default MessengerContent
