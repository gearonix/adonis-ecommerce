import {makeStore} from 'app/redux/store'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch as ReactReduxDispatch, useSelector as useReduxSelector} from 'react-redux'

export type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store['dispatch']
export type AppState = ReturnType<Store['getState']>;

export const createThunk = createAsyncThunk.withTypes<{ state: AppState, dispatch: AppDispatch }>()

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

// eslint-disable-next-line
export const useDispatch = ReactReduxDispatch<AppDispatch>;


