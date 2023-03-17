import dynamic from 'next/dynamic'

export const MessengerHeader = dynamic(() => import('./ui/Header/MessengerHeader'))
export const MessengerAside = dynamic(() => import('./ui/Aside/MessengerAside'))
export const MessengerContent = dynamic(() => import('./ui/Content/MessengerContent'))

export { default as SocketProvider } from './socket/provider/SocketProvider'
export { default as SocketContext } from './socket/provider/SocketContext'
export { default as MessengerInput } from './ui/MessengerInput/MessengerInput'


export { messengerApi } from './api'

export type { MessengerApi } from './types'

export { messengerSlice, messengerActions } from './store/slice/messengerReducer'

export { default as MessengerSelectors } from './store/selectors/messenger.selectors'
export { selectFilteredRooms } from './store/selectors/others/selectFilteredRooms'
export { selectOpponentUser } from './store/selectors/others/selectOpponentUser'
export { selectUserStatus } from './store/selectors/others/selectUserStatus'

export type { MessengerSlice, Room, Message } from './store/slice/initialState'
