import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import { AxiosResponse as Res } from 'shared/types/common'
import { Post } from 'shared/types/slices'
import { PostsSlice } from 'shared/types/slices/post'


const endpoint = Endpoints.POSTS

export const PostsApi = {
  getPosts(userId: number, page: number): Res<PostsSlice> {
    return axiosInstance.get(`${endpoint.getPosts}/${userId}?page=${page}`)
  },
  addPosts(message: string): Res<Post> {
    return axiosInstance.post(endpoint.addPost, { message })
  },
  setPostImage(image: FormData, postId: number): Res<{fileUrl: string}> {
    return axiosInstance.post(`${endpoint.setPostImage}?post_id=${postId}`, image)
  }
}
