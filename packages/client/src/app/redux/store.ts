import {configureStore} from '@reduxjs/toolkit'
import {createReducers} from './createReducers'


const store = configureStore({
  reducer: createReducers(),
})


export default store
