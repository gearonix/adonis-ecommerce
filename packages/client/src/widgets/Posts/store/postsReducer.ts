import {Post} from 'shared/types/slices'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initialState: Post[] = []

const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, {payload}: PayloadAction<Post[]>) {
      return payload
    },
    clearPosts() {
      return initialState
    },
    addPost(state, {payload}: PayloadAction<Post>) {
      state.unshift(payload)
    },
  },
})

export const postActions = postReducer.actions

export const postSlice = postReducer.reducer
