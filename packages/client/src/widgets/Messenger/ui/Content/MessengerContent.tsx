import { FC, useEffect } from 'react'
import s from './style.module.scss'
import { MessengerContent as MessengerContentTemp } from 'entities/Messenger'
import { useSocket } from 'shared/lib/hooks'

const MessengerContent: FC = () => {
  const socket = useSocket('messenger')

  useEffect(() => {
    socket.on('message', (data: any) => {
      console.log('RECEIVED SOCKET FROM SERVER:')
      console.log(data)
    })
  }, [socket])


  const TestingSocket = () => {
    socket.emit('message', {
      testing: 'immense'
    })
  }

  return <div className={s.messages_main}>
    <button onClick={TestingSocket}>test socket</button>
    <div className={s.wrapper}>
      <MessengerContentTemp/>
    </div>
  </div>
}

export default MessengerContent
