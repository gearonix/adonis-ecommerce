import { createAsyncThunk } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as ReactReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import { Extra } from 'app/store/types'
import createStore from 'app/store/store'

export type Store = ReturnType<typeof createStore>;
export type AppDispatch = Store['dispatch']
export type AppState = ReturnType<Store['getState']>;

export const createThunk = createAsyncThunk.withTypes<{
    state: AppState,
    dispatch: AppDispatch,
    extra: Extra
}>()

export const useSelector: TypedUseSelectorHook<Required<AppState>> = useReduxSelector

// eslint-disable-next-line
export const useDispatch = ReactReduxDispatch<AppDispatch>;


