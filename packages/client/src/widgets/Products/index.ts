export { default as RecommendedItems } from './ui/RecommendedItems/RecommendedItems'
export { default as SearchList } from './ui/SearchList/SearchList'
export { default as MyProducts } from './ui/MyProducts/MyProducts'
export { default as AddProduct } from './ui/AddProduct/AddProduct'
export { default as SearchAside } from './ui/SearchAside/SearchAside'

export { productsSlice, productsActions } from './store/productsReducer'

export { getUserProducts } from './store/thunks/getUserProducts'

export type { RecommendedItemProps } from './ui/RecommendedItems/RecommendedItems'
