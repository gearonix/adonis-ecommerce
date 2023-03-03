import { profileApi } from 'widgets/Profile'
import { productsApi } from 'widgets/Products'
import { currentProductApi } from 'widgets/CurrentProduct'
import { authApi } from 'widgets/Login'
import { postsApi } from 'widgets/Posts'
import { savedApi } from 'features/Saved'
import { ApiConfig } from 'app/store/types'


const apiConfig: ApiConfig = {
  profile: profileApi,
  products: productsApi,
  product: currentProductApi,
  auth: authApi,
  posts: postsApi,
  saved: savedApi
}

export default apiConfig
