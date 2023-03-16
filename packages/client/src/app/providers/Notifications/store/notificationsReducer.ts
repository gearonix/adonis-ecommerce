import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from 'widgets/Messenger'

const initialState: Message[] = []

const notificationsReducer = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, { payload }: PayloadAction<Message>) {
      const ids = state.map(({ messageId }) => messageId)
      if (!ids.includes(payload.messageId)) {
        state.push(payload)
      }
    },
    clearNotifications(state, { payload }: PayloadAction<number>) {
      return state.filter((message) => message.roomId !== payload)
    }
  }
})

export const notifyActions = notificationsReducer.actions

export const notifySlice = notificationsReducer.reducer
