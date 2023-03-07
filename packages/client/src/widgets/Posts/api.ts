import axiosInstance from 'shared/config/consts/axios'
import Endpoints from 'shared/config/consts/endpoints'
import { PostsApi } from 'widgets/Posts/types'


const endpoint = Endpoints.POSTS

export const postsApi: PostsApi = {
  getPosts(userId, page) {
    return axiosInstance.get(`${endpoint.getPosts}/${userId}?page=${page}`)
  },
  add(message) {
    return axiosInstance.post(endpoint.addPost, { message })
  },
  setImage(image, postId) {
    return axiosInstance.post(`${endpoint.setPostImage}?post_id=${postId}`, image)
  }
}
