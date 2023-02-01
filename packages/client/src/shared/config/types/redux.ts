import store from "app/redux/store";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {useDispatch as ReactReduxDispatch} from "react-redux";

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const createThunk = createAsyncThunk.withTypes<{ state: AppState, dispatch: AppDispatch }>()

export const useDispatch = ReactReduxDispatch<AppDispatch>
