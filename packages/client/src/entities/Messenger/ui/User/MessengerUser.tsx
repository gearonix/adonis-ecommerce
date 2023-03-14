import { FC, ReactNode } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { Room } from 'shared/types/slices'


interface Props{
  room: Room,
  switchRoom: (id : number) => void,
  selected: boolean
}

const MessengerUser: FC<Props> = ({ room, switchRoom, selected }) => {
  return <div onClick={() => switchRoom(room.roomId)}>
    <div className={s.user}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <NextImage src={'/assets/dev/avatar.jpg'}/>
        </div>
        <div className={s.info}>
          <h3>ROOM_ID: {room.roomId} {selected && '#'}</h3>
          <span>Members: {room.members.join(', ')}</span>
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
