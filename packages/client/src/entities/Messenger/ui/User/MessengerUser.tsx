import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Message, Room, User } from 'shared/types/slices'
import { Helpers } from 'shared/lib/helpers'
import { DefaultAssets } from 'shared/config/consts/assets'
import cn from 'classnames'
import { getMembers } from 'entities/Messenger/lib/getMembers'
import { Display, Ternary } from 'shared/lib/components'

interface Props{
  room: Room,
  switchRoom: (id : number) => void,
  selected: boolean,
  user: User,
  notification: Message[]
}

const MessengerUser: FC<Props> = ({ room, switchRoom, selected, user, notification }) => {
  const helpers = new Helpers()
  const notify = notification?.at(-1)
  return <div onClick={() => switchRoom(room.roomId)}>
    <div className={cn(s.user, { [s.selected]: selected })}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
        </div>
        <div className={s.info}>
          <h3>{helpers.toNormalName(user)}</h3>
          <Ternary where={notify?.messageText}>
            <span>New message: {notify?.messageText}</span>
            <span>Members: {getMembers(room)}</span>
          </Ternary>
        </div>
        <div className={s.time}>
          <Display when={notify?.creationDate}>
            <span>{helpers.reformatMysqlDate(notify?.creationDate as string, 'HH:mm')}</span>
          </Display>

          <Display when={notification.length}>
            <div className={s.new_message}>{notification?.length}</div>
          </Display>
        </div>
      </div>
    </div>
  </div>
}

export default MessengerUser
