const EndPoints = {
  AUTH: {
    login: 'auth/login',
    getUser: '/auth/get/me',
    getToken: '/auth/get/token',
    registration: '/auth/registration',
    deleteToken: '/auth/delete/token',
    googleRegistration: '/auth/registration/google',
    googleLogin: '/auth/login/google',
  },
  USERS: {
    changeProfileData: '/users/change/profile',
    changeUserBackground: '/users/change/background',
    changeUserAvatar: '/users/change/avatar',
  },
  PRODUCTS: {
    createProduct: '/products/create',
    setProductImages: '/products/set/images',
    userProducts: '/products/user',
    products: '/products',
    recommended: '/products/recommended',
    productsByIds: '/products/ids',
    saved: '/products/saved',
    addToSaved: '/products/saved/add',
    removeFromSaved: '/products/saved/remove',
  },
  COMMENTS: {
    createProductComment: '/comments/products/create',
  },
} as const


export default EndPoints
