import { SavedApi } from 'features/Saved'
import { CurrentProductApi } from 'widgets/CurrentProduct'
import { AuthApi } from 'widgets/Login'
import { PostsApi } from 'widgets/Posts'
import { ProductsApi } from 'widgets/Products'
import { ProfileApi } from 'widgets/Profile'
import { CreateMiddleWare } from 'app/store/config/createMiddleware'
import { ObjectNullable, Required } from 'shared/types/common'
import {
  AuthSlice, CurrentProductSlice, Message, MessengerSlice, PostsSlice,
  ProductsSlice, SavedSlice
} from 'shared/types/slices'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { ReducerManager } from 'app/store/reducerManager'
import { CartSlice } from 'shared/types/slices/cartSlice'
import { UserSlice } from 'shared/types/slices/user'
import { MessengerApi } from 'widgets/Messenger'

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
    messenger?: MessengerSlice
}

export interface StoreWithManager extends ToolkitStore{
    reducerManager: ReducerManager<StateSchema>
}

export type StateSchema = RequiredReducers & OptionalReducers

export type StateSchemaKey = keyof StateSchema

export type RequiredState = Required<StateSchema>

export type Redirect = (url: string, as?: (string | undefined), options?: any) => Promise<boolean>
