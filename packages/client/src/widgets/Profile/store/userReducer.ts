import {ObjectNullable} from "shared/types/helpers";
import {UserSlice} from "shared/types/slices";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: ObjectNullable<UserSlice> = {
    role: null,
    first_name: null,
    last_name: null,
    email: null,
    avatar: null,
    background: null,
    description: null,
    country: null,
    city: null,
    user_id: null,
    registration_date: null
}
const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state, {payload}: PayloadAction<UserSlice>) {
            return payload
        }
    }
})


export const {setUser} = userReducer.actions

export default userReducer.reducer
