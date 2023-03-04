import { createAsyncThunk } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as ReactReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import store from 'app/store/store'
import { Extra } from 'app/store/types'

export type Store = typeof store;
export type AppDispatch = Store['dispatch']
export type AppState = ReturnType<Store['getState']>;

export const createThunk = createAsyncThunk.withTypes<{
    state: AppState,
    dispatch: AppDispatch,
    extra: Extra
}>()

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

// eslint-disable-next-line
export const useDispatch = ReactReduxDispatch<AppDispatch>;


