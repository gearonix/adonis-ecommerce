const EndPoints = {
  AUTH: {
    login: 'auth/login',
    getUser: '/auth/token/me',
    registration: '/auth/registration',
    deleteToken: '/auth/token/remove',
    googleRegistration: '/auth/google/registration',
    googleLogin: '/auth/google/login'
  },
  USERS: {
    changeProfileData: '/users/change',
    changeUserBackground: '/users/change/background',
    changeUserAvatar: '/users/change/avatar'
  },
  PRODUCTS: {
    createProduct: '/products/create',
    setProductImages: '/products/set/images',
    userProducts: '/products/user',
    products: '/products',
    recommended: '/products/recommended',
    productsByIds: '/products/ids',
    saved: '/products/saved/items',
    addToSaved: '/products/saved',
    removeFromSaved: '/products/saved'
  },
  COMMENTS: {
    createProductComment: '/comments/products/create',
    getProductComments: '/comments/products'
  },
  POSTS: {
    getPosts: '/posts',
    addPost: '/posts/create',
    setPostImage: '/posts/set/images'
  },
  MESSENGER: {
    getRooms: '/messenger/rooms'
  }
} as const


export default EndPoints
