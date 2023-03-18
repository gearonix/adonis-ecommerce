import dynamic from 'next/dynamic'

export { default as GithubBanner } from './ui/GithubBanner/GithubBanner'
export const CartIcons = dynamic(() => import('./ui/CartIcons/CartIcons'))
export const ExtraServices = dynamic(() => import('./ui/ExtraServices/ExtraServices'))
export const FindProductBanner = dynamic(() => import('./ui/FindProductBanner/FindProductSkeleton'))
export const Categories = dynamic(() => import('./ui/Categories/Categories'))
