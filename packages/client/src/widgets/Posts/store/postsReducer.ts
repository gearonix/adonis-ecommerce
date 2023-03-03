import { Post } from 'shared/types/slices'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postsInitialState as initialState, PostsSlice } from 'shared/types/slices/post'


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

  }
})

export const postActions = postReducer.actions

export const postSlice = postReducer.reducer
