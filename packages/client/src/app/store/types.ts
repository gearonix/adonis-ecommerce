import { SavedApi } from 'features/Saved'
import { CurrentProductApi } from 'widgets/CurrentProduct'
import { AuthApi } from 'widgets/Login'
import { PostsApi } from 'widgets/Posts'
import { ProductsApi } from 'widgets/Products'
import { ProfileApi } from 'widgets/Profile'

export interface ApiConfig {
    profile: ProfileApi
    products: ProductsApi
    product: CurrentProductApi
    auth: AuthApi
    posts: PostsApi
    saved: SavedApi
}

export interface Extra{
    api: ApiConfig,
}
