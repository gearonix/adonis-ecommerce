import { Room } from 'widgets/Messenger'

export const getRoomByTargetId = (targetId: string, rooms: Room[]) => {
  const room = rooms.find((room) => room.invitedId === Number(targetId) ||
        room.starterId === Number(targetId))
  return room?.roomId
}
