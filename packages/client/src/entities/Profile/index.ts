import dynamic from 'next/dynamic'

export { default as Post } from './ui/Post/PostsAndComments/Post/Post'
export { CommentTemplate } from './ui/Post/PostsAndComments/Comment/CommentTemplate'
export { default as UserInfo } from './ui/UserInfo/UserInfo'
export { default as AddProductImage } from './ui/AddProductImage/AddProductImage'

export const AddProductTemplate = dynamic(() => import('./ui/AddProduct/AddProduct'))
export const EditProfile = dynamic(() => import('./ui/EditProfile/EditProfile'))
export const ProfileHeader = dynamic(() => import('./ui/ProfileHeader/ProfileHeaderTemp'))
export const AddPostTemplate = dynamic(() => import('./ui/Post/AddPost/AddPost'))
