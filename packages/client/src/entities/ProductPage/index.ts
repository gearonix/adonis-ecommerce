import dynamic from 'next/dynamic'

export const ProductParams = dynamic(() => import('./ui/ProductParams/ProductParams'))
export const ProductImages = dynamic(() => import('./ui/ProductImage/ProductImage'))
export const PurchaseProduct = dynamic(() => import('./ui/PurchaseProduct/PurchaseProduct'))

export { default as CommentBar } from './ui/CommentBar/CommentBar'
export { default as Thanks } from './ui/Thanks/Thanks'

export const ProductDescription = dynamic(() => import('./ui/ProductDescription/ProductDescriptions'))
