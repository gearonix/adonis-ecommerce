import {makeStore} from "app/redux/store";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {useDispatch as ReactReduxDispatch} from 'react-redux'

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>;

export const createThunk = createAsyncThunk.withTypes<{ state: AppState, dispatch: AppDispatch }>()

export const useDispatch = ReactReduxDispatch<AppDispatch>;

