import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit'
import { messengerInitialState as initialState, Room, Message } from './initialState'
import { UserStatus } from 'shared/config/consts/others'

const messengerReducer = createSlice({
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
    },
    makeMessagesRead(state) {
      state.messages = state.messages.map((message) => {
        return { ...message, isRead: true }
      })
    },
    clearMessenger() {
      return initialState
    }
  }
})


export const messengerActions = messengerReducer.actions

export const messengerSlice = messengerReducer.reducer
