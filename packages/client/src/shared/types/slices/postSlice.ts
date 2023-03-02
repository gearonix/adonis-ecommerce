import {User} from 'shared/types/slices'

export interface Post{
    message: string,
    userId: number,
    image : string,
    likes: number,
    date: string,
    postId: number,
    user: User
}
