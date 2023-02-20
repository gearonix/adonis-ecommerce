import {configureStore} from '@reduxjs/toolkit'
import {createReducers} from './createReducers'
import {createWrapper} from 'next-redux-wrapper'
import {InitialStore} from 'shared/types/redux'


export const makeStore = () => configureStore<InitialStore>({
  reducer: createReducers(),
})


const wrapper = createWrapper(makeStore)


export default wrapper
