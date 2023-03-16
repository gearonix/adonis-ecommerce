import { RequiredState } from 'app/store/types'
import { Room } from 'widgets/Messenger'

const NotifySelectors = {
  selectByRooms: (rooms: Room[]) => ({ notifications }: RequiredState) => {
    return rooms.map((room) => {
      return notifications.filter((message) => message.roomId === room.roomId)
    })
  },
  notifications: ({ notifications }: RequiredState) => notifications
}


export default NotifySelectors
