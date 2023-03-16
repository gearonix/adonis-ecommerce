import { User } from 'widgets/Profile'

export interface PostsSlice{
    data: Post[],
    page: number,
    count : number,
    isLoading: boolean
}

export interface Post{
    message: string,
    userId: number,
    image : string,
    likes: number,
    date: string,
    postId: number,
    user: User
}

export const postsInitialState: PostsSlice = {
  data: [],
  page: 0,
  count: 0,
  isLoading: false
}
