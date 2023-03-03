import { ProfileApi } from 'widgets/Profile'
import { ProductsApi } from 'widgets/Products'
import { CurrentProductApi } from 'widgets/CurrentProduct'
import { AuthApi } from 'widgets/Login'
import { PostsApi } from 'widgets/Posts'
import { SavedApi } from 'features/Saved'
import { ObjectNullable } from 'shared/types/common'
import { AuthSlice, CurrentProduct, PostsSlice, Products, SavedSlice, User } from 'shared/types/slices'
import { Url } from 'url'
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

export interface State{
    user: ObjectNullable<User>,
    products: Products,
    currentProduct: CurrentProduct,
    auth: AuthSlice,
    cart: number[],
    saved: SavedSlice,
    posts: PostsSlice
}

export type Redirect = (url: Url, as?: (Url | undefined), options?: any) => Promise<boolean>

export interface CreateStoreProps {
    redirect: Redirect
}

export type CreateReduxStore<T> = (props: CreateStoreProps) => ToolkitStore<T>

export interface CustomStore extends ToolkitStore {
    reducerManager: ReducerManager<State>
}

export interface Extra{
    api: ApiConfig,
    redirect: Redirect
}
