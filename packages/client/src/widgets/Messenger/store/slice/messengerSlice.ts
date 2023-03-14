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
      if (!ids.includes(payload.messageId)) {
        state.messages.push(payload)
      }
    },
    clearRoom(state) {
      state.messages = []
    }
  }
})


export const messengerActions = messengerSlice.actions

export const messengerReducer = messengerSlice.reducer
