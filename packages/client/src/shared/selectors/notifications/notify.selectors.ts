import { RequiredState } from 'app/store/types'
import { Room } from 'shared/types/slices'

const NotifySelectors = {
  selectByRooms: (rooms: Room[]) => ({ notifications }: RequiredState) => {
    return rooms.map((room) => {
      return notifications.filter((message) => message.roomId === room.roomId)
    })
  }
}


export default NotifySelectors
