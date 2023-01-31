import {ObjectNullable} from "shared/types/globals";
import {UserSlice} from "shared/types/slices";
import {createSlice} from '@reduxjs/toolkit'

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

const userSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})


export default userSlice.reducer
