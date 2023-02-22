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
    setProductImages: (id : number) => `/products/set/images?product_id=${id}`,
    myProducts: '/products/my',
    products: '/products',
    recommended: '/products/recommended',
  },
} as const


export default EndPoints
