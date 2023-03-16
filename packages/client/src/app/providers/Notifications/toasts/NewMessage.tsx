import { FC } from 'react'
import { Helpers } from 'shared/lib/helpers'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'
import { Message } from 'widgets/Messenger'

interface Props{
    message: Message
}

export const NewMessage: FC<Props> = ({ message }) => {
  const helpers = new Helpers()
  const router = useRouter()

  const onClick = () => {
    router.push(routes.MESSENGER)
  }

  return <div onClick={onClick}>
        🦄 {helpers.toNormalName(message.user)}: {helpers.cropped(message.messageText, 13)}
  </div>
}
