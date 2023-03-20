import { AxiosResponse as Res } from 'shared/types/common'
import { Post, PostsSlice } from './store/slice/initialState'

export interface AddPostForm {
    message: string,
    image: File,
}

export interface PostsApi {
    getPosts(userId: number, page: number): Res<PostsSlice>

    add(message: string): Res<Post>

    setImage(image: FormData, id: number): Res<{ fileUrl: string }>
}
