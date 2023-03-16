export { default as MyPosts } from './ui/UserPosts/Posts'
export { default as AddPost } from './ui/AddPost/AddPost'

export { postSlice, postActions } from './store/slice/postsReducer'

export { postsApi } from './api'
export type { PostsApi } from './types'

export { default as PostSelectors } from './store/selectors/post.selectors'

export { postsInitialState } from './store/slice/initialState'
