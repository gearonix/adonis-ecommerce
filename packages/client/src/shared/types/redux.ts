import {makeStore} from 'app/redux/store'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch as ReactReduxDispatch, useSelector as useReduxSelector} from 'react-redux'
import {ObjectNullable} from 'shared/types/common'
import {UserSlice} from 'shared/types/slices'

export type StoreApi = ReturnType<typeof makeStore>;
export type AppDispatch = StoreApi['dispatch']
export type AppState = ReturnType<StoreApi['getState']>;

export const createThunk = createAsyncThunk.withTypes<{ state: AppState, dispatch: AppDispatch }>()

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

// eslint-disable-next-line
export const useDispatch = ReactReduxDispatch<AppDispatch>;


export interface InitialStore {
    user: ObjectNullable<UserSlice>
}
