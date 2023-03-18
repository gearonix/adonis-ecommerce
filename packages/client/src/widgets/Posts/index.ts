import dynamic from 'next/dynamic'

export const MyPosts = dynamic(() => import('./ui/UserPosts/Posts'))
export const AddPost = dynamic(() => import('./ui/AddPost/AddPost'))


export { postSlice, postActions } from './store/slice/postsReducer'

export { postsApi } from './api'
export type { PostsApi } from './types'

export { default as PostSelectors } from './store/selectors/post.selectors'

export { postsInitialState } from './store/slice/initialState'
