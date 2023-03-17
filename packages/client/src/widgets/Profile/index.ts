export { default as AddProduct } from '../Products/ui/AddProduct/AddProduct'
export { default as ContentBlock } from './ui/ContentBlock/ContentBlock'
export { default as ContentButtons } from './ui/ContentButtons/ContentButtons'
export { default as EditProfile } from './ui/EditProfile/EditProfile'
export { default as ProfileHeader } from './ui/ProfileHeader/ProfileHeader'
export { default as ProfileWall } from './ui/ProfileWall/ProfileWall'


export { userSlice, userActions } from './store/slice/profileReducer'

export { default as profileApi } from './api'
export type { ProfileApi } from './api'

export type { PostsSlice, Post } from '../Posts/store/slice/initialState'
export type { User, UserSlice } from './store/slice/initialState/userInitialState'
export { default as UserSelectors } from './store/selectors/profile/profile.selectors'

