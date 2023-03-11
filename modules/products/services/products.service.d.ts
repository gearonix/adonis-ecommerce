import { ProductsEntity } from '@app/entities/products/products.entity';
import { Repository } from 'typeorm';
import { AuthService } from '@app/modules/auth';
import { UsersService } from '@app/modules/users';
import { SearchDTO } from '@app/modules/products/dto/searchDTO';
import { SavedService } from '@app/modules/products/services/saved.service';
import { CommentsService } from '@app/modules/comments/comments.service';
import { SearchByIdsDTO } from '@modules/products/dto';
export declare class ProductsService {
    private products;
    private authService;
    private usersService;
    private savedService;
    private commentsService;
    constructor(products: Repository<ProductsEntity>, authService: AuthService, usersService: UsersService, savedService: SavedService, commentsService: CommentsService);
    getProducts(query: SearchDTO): Promise<{
        data: ProductsEntity[];
        count: number;
    }>;
    randomProducts(query: SearchDTO): Promise<ProductsEntity[]>;
    getProduct(productId: number): Promise<{
        productInfo: ProductsEntity;
        salesman: import("../../../entities/users.entity").UsersEntity & {
            isMe: boolean;
        };
        comments: {
            data: import("../../../entities/product_comments.entity").ProductCommentsEntity[];
            count: number;
        };
    }>;
    userProducts(salesmanId: number, page: string): Promise<{
        data: ProductsEntity[];
        count: number;
    }>;
    getProductsIdsByUserId(salesmanId: number): Promise<ProductsEntity[]>;
    getProductsByIds(body: SearchByIdsDTO): Promise<ProductsEntity[]>;
}
