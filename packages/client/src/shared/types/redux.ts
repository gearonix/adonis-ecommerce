import { createAsyncThunk } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as ReactReduxDispatch,
  useSelector as useReduxSelector } from 'react-redux'
import { createStore } from 'app'
import { Extra } from 'app/store/types'

export type Store = ReturnType<typeof createStore>;
export type AppDispatch = Store['dispatch']
export type AppState = ReturnType<Store['getState']>;

export const createThunk = createAsyncThunk.withTypes<
    { state: AppState,
    dispatch: AppDispatch,
    extra: Extra,
    rejectValue: string}>()


export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

export const useDispatch = ReactReduxDispatch<AppDispatch>

