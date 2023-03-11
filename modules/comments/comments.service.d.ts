import { ProductCommentsEntity, ProductsEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { AuthService } from '@app/modules/auth';
import { NewCommentDTO } from '@app/modules/comments/dto';
export declare class CommentsService {
    private productComments;
    private products;
    private authService;
    constructor(productComments: Repository<ProductCommentsEntity>, products: Repository<ProductsEntity>, authService: AuthService);
    createProductComment({ message, productId }: NewCommentDTO): Promise<ProductCommentsEntity>;
    getProductComments(productId: number, page?: string): Promise<{
        data: ProductCommentsEntity[];
        count: number;
    }>;
    getCommentById(commentId: number): Promise<ProductCommentsEntity>;
}
