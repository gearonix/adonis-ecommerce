import {ObjectNullable} from "shared/config/types/globals";
import {UserSlice} from "shared/config/types/slices";
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
    registration_date: null,
    isLoading: true
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state, {payload}: PayloadAction<UserSlice>) {
            return {...payload}
        },
        setLoading(state, {payload}: PayloadAction<boolean>) {
            state.isLoading = payload
        }
    },

})


export const {setUser, setLoading} = userSlice.actions

export default userSlice.reducer
