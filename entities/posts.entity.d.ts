import { UsersEntity } from '@app/entities/users.entity';
export declare class PostsEntity {
    date: Date;
    message: string;
    userId: number;
    image: string;
    likes: number;
    postId: number;
    user: UsersEntity;
}
