import dynamic from 'next/dynamic'

export const ProductBannerForm = dynamic(() => import('./ui/SearchProductForm/ProductBannerForm'))
export const SearchHeader = dynamic(() => import('./ui/SearchHeader/SearchHeader'))
export const SearchAside = dynamic(() => import('./ui/SearchAsideSkeleton/SearchAsideTemplate'))

