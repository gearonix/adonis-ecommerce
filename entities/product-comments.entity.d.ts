import { UsersEntity } from '@app/entities/users.entity';
export declare class ProductCommentsEntity {
    date: Date;
    message: string;
    userId: number;
    likes: number;
    productId: number;
    commentId: number;
    user: UsersEntity;
}
