import dynamic from 'next/dynamic'

export const RecommendedMap = dynamic(() => import('./ui/RecommendedItems/RecommendedItems'))
export const YouMayLike = dynamic(() => import('./ui/YouMayLike/YouMayLike'))
export const SortedProducts = dynamic(() => import('./ui/SortedProducts/SortedProducts'))
