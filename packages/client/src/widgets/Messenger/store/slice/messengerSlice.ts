import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { messengerInitialState as initialState } from 'shared/types/slices'
import { Room } from 'shared/types/slices'
import { Message } from 'shared/types/slices'

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    setRooms(state, { payload }: Action<Room[]>) {
      state.rooms = payload.map((room) => {
        return { ...room, members: JSON.parse(room.members as any) }
      })
    },
    addRoom(state, { payload }: Action<Room>) {
      const ids = state.rooms.map((room) => room.roomId)
      if (!ids.includes(payload.roomId)) {
        state.rooms.unshift(payload)
      }
    },
    setMessages(state, { payload }: Action<Message[]>) {
      state.messages = payload
    },
    changeSelectedRoomId(state, { payload }: Action<number>) {
      state.selectedId = payload
    },
    addMessage(state, { payload }: Action<Message>) {
      const ids = state.messages.map(({ messageId }) => messageId)
      if (!state.messages.length) {
        state.messages.push(payload)
        return
      }
      console.log(state.messages.length)
      const roomId = state.messages[0]?.roomId
      console.log(payload)
      console.log(roomId)
      console.log(ids)
      // remove this
      if (!ids.includes(payload.messageId) && Number(payload.roomId) === Number(roomId)) {
        state.messages.push(payload)
      }
    },
    clearRoom(state) {
      state.messages = []
      state.selectedId = null
    }
  }
})


export const messengerActions = messengerSlice.actions

export const messengerReducer = messengerSlice.reducer
