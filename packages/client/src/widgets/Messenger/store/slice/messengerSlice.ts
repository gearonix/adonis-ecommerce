import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { messengerInitialState as initialState } from 'shared/types/slices'
import { Room } from 'shared/types/slices'
import { Message } from 'shared/types/slices'
import { UserStatus } from 'shared/config/consts/others'

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    setRooms(state, { payload }: Action<Room[]>) {
      state.rooms.data = payload
    },
    addRoom(state, { payload }: Action<Room>) {
      const ids = state.rooms.data.map((room) => room.roomId)
      if (!ids.includes(payload.roomId)) {
        state.rooms.data.unshift(payload)
      }
    },
    setMessages(state, { payload }: Action<Message[]>) {
      state.messages = payload
    },
    changeSelectedRoomId(state, { payload }: Action<number>) {
      state.selectedId = payload
      state.isTyping = false
    },
    addMessage(state, { payload }: Action<Message>) {
      const ids = state.messages.map(({ messageId }) => messageId)
      if (!ids.includes(payload.messageId)) {
        state.messages.push(payload)
      }
    },
    clearRoom(state) {
      state.messages = []
    },
    changeRoomsFilter(state, { payload }: Action<string>) {
      state.rooms.filter = payload
    },
    setIsTyping(state, { payload }: Action<boolean>) {
      state.isTyping = payload
    },
    changeUserStatus(state, { payload }: Action<UserStatus>) {
      state.status = payload
      state.isTyping = false
    }
  }
})


export const messengerActions = messengerSlice.actions

export const messengerReducer = messengerSlice.reducer
