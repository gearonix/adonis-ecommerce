import dynamic from 'next/dynamic'

export const RecommendedItems = dynamic(() => import('./ui/RecommendedItems/RecommendedItems'))
export const SearchList = dynamic(() => import('./ui/SearchList/SearchList'))
export const AddProduct = dynamic(() => import('./ui/AddProduct/AddProduct'))

export { default as MyProducts } from './ui/MyProducts/MyProducts'
export { default as SearchAside } from './ui/SearchAside/SearchAside'

export { productsSlice, productsActions } from './store/slice/productsReducer'

export { getUserProducts } from './store/thunks/getUserProducts/getUserProducts'

export type { RecommendedItemProps } from './ui/RecommendedItems/RecommendedItems'

export { productsApi } from './api'
export type { ProductsApi } from './types'

export type { Product, ProductsSlice } from './store/slice/initialState'

export { default as ProductsSelectors } from './store/selectors/products.selectors'
