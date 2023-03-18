import dynamic from 'next/dynamic'

export const MessengerContent = dynamic(() => import('./ui/Content/MessengerContent'))
export const MessengerHeaderTemplate = dynamic(() => import('./ui/Header/MessengerHeaderTemplate'))
export const MessengerUser = dynamic(() => import('./ui/User/MessengerUser'))
export const UserInfo = dynamic(() => import('./ui/UserInfo/UserInfo'))
export const MessageBar = dynamic(() => import('./ui/MessageBar/MessageBar'))
