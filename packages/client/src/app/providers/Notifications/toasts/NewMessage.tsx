import { FC } from 'react'
import { Helpers } from 'shared/lib/helpers'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'
import { Message } from 'widgets/Messenger'
import Link from 'next/link'

interface Props{
    message: Message
}

export const NewMessage: FC<Props> = ({ message }) => {
  const helpers = new Helpers()

  return <Link href={{
    pathname: routes.MESSENGER,
    query: { targetId: message.senderId }
  }}>
    <div>
        🦄 {helpers.toNormalName(message.user)}: {helpers.cropped(message.messageText, 13)}
    </div>
  </Link>
}
