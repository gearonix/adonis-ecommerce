import {configureStore} from '@reduxjs/toolkit'
import {createReducers} from './createReducers'
import {createWrapper} from 'next-redux-wrapper'

export const makeStore = () => configureStore({
  reducer: createReducers(),
})


const wrapper = createWrapper(makeStore)


export default wrapper
