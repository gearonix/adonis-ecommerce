import { SavedApi } from 'features/Saved'
import { CurrentProductApi } from 'widgets/CurrentProduct'
import { AuthApi } from 'widgets/Login'
import { PostsApi } from 'widgets/Posts'
import { ProductsApi } from 'widgets/Products'
import { ProfileApi } from 'widgets/Profile'
import { CreateMiddleWare } from 'app/store/config/createMiddleware'
import { ObjectNullable, Required } from 'shared/types/common'
import { AuthSlice, CurrentProduct, PostsSlice, Products, SavedSlice, User } from 'shared/types/slices'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { ReducerManager } from 'app/store/reducerManager'

export interface ApiConfig {
    profile: ProfileApi
    products: ProductsApi
    product: CurrentProductApi
    auth: AuthApi
    posts: PostsApi
    saved: SavedApi
}

export interface Extra extends CreateMiddleWare{
    api: ApiConfig,
}

export interface RequiredReducers{
    user: ObjectNullable<User>,
    products: Products,
    auth: AuthSlice,
    cart: number[],
    saved: SavedSlice,
}

export interface OptionalReducers{
    posts: PostsSlice
    currentProduct: CurrentProduct,
}

export interface StoreWithManager extends ToolkitStore{
    reducerManager: ReducerManager<StateSchema>
}

export type StateSchema = RequiredReducers & Partial<OptionalReducers>

export type RequiredState = Required<StateSchema>

export type Redirect = (url: string, as?: (string | undefined), options?: any) => Promise<boolean>
