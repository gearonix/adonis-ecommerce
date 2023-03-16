import { Post } from 'widgets/Profile'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postsInitialState as initialState, PostsSlice } from 'widgets/Posts/store/slice/initialState'
import { getUserPosts } from 'widgets/Posts/store/thunks'
import { withLoading } from 'shared/lib/helpers/others/reduxHelpers'


const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, { payload }: PayloadAction<PostsSlice>) {
      state.data = payload.data
      state.count = payload.count
    },
    clearPosts() {
      return initialState
    },
    addPost(state, { payload }: PayloadAction<Post>) {
      state.data.unshift(payload)
      state.count += 1
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    }
  },
  extraReducers: (builder) => {
    withLoading(builder, getUserPosts)
  }
})


export const postActions = postReducer.actions

export const postSlice = postReducer.reducer
