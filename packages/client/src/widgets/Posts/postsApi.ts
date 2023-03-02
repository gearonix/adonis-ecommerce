import axiosInstance from 'shared/config/axios'
import Endpoints from 'shared/config/endpoints'
import {AxiosResponse as Res} from 'shared/types/common'
import {Post} from 'shared/types/slices'


const endpoint = Endpoints.POSTS

export const PostsApi = {
  getPosts(userId: number): Res<Post[]> {
    return axiosInstance.get(`${endpoint.getPosts}/${userId}`)
  },
  addPosts(message: string): Res<Post> {
    return axiosInstance.post(endpoint.addPost, {message})
  },
  setPostImage(image: FormData, postId: number): Res<{fileUrl: string}> {
    return axiosInstance.post(`${endpoint.setPostImage}?post_id=${postId}`, image)
  },
}
