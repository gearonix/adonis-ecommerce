import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Room, User } from 'shared/types/slices'
import { Helpers } from 'shared/lib/helpers'
import { DefaultAssets } from 'shared/config/consts/assets'
import cn from 'classnames'

interface Props{
  room: Room,
  switchRoom: (id : number) => void,
  selected: boolean,
  user: User
}

const MessengerUser: FC<Props> = ({ room, switchRoom, selected, user }) => {
  const helpers = new Helpers()
  return <div onClick={() => switchRoom(room.roomId)}>
    <div className={cn(s.user, { [s.selected]: selected })}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
        </div>
        <div className={s.info}>
          <h3>{helpers.toNormalName(user)}</h3>
          <span>Members: {room.starterId}, {room.invitedId}</span>
        </div>
        <div className={s.time}>
          <span>19:48</span>
          <div className={s.new_message}>1</div>
        </div>
      </div>
    </div>
  </div>
}

export default MessengerUser
