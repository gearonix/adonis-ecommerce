import { SavedApi, SavedSlice } from 'features/Saved'
import { CurrentProductApi, CurrentProductSlice } from 'widgets/CurrentProduct'
import { AuthApi, AuthSlice } from 'widgets/Login'
import { PostsApi } from 'widgets/Posts'
import { ProductsApi, ProductsSlice } from 'widgets/Products'
import { ProfileApi, PostsSlice, UserSlice, User } from 'widgets/Profile'
import { CreateMiddleWare } from 'app/store/config/createMiddleware'
import { ObjectNullable, Required } from 'shared/types/common'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { ReducerManager } from 'app/store/reducerManager'
import { CartSlice } from 'widgets/Cart'
import { Message, MessengerApi, MessengerSlice } from 'widgets/Messenger'
import { UsersSlice } from 'widgets/Users/store/slice/initialState'

export interface ApiConfig {
    profile: ProfileApi
    products: ProductsApi
    product: CurrentProductApi
    auth: AuthApi
    posts: PostsApi
    saved: SavedApi,
    messenger: MessengerApi
}

export type ApiConfigKey = keyof ApiConfig

export interface Extra extends CreateMiddleWare{
    api: ApiConfig,
}

export interface RequiredReducers{
    user: ObjectNullable<UserSlice>,
    products: ProductsSlice,
    auth: AuthSlice,
    cart: CartSlice,
    saved: SavedSlice,
    notifications: Message[]
}


export interface OptionalReducers{
    posts?: PostsSlice
    currentProduct?: CurrentProductSlice,
    messenger?: MessengerSlice,
    users?: UsersSlice
}

export interface StoreWithManager extends ToolkitStore{
    reducerManager: ReducerManager<StateSchema>
}

export type StateSchema = RequiredReducers & OptionalReducers

export type StateSchemaKey = keyof StateSchema

export type RequiredState = Required<StateSchema>

export type Redirect = (url: string, as?: (string | undefined), options?: any) => Promise<boolean>
