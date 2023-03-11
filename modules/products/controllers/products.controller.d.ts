import { SearchDTO } from '@app/modules/products/dto/searchDTO';
import { ProductsService } from '@modules/products/services';
import { SearchByUserIdDTO } from '@modules/products/dto';
import { SearchByIdsDTO } from '@modules/products/dto/searchByIdsDTO';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(query: SearchDTO): Promise<{
        data: import("../../../entities/index").ProductsEntity[];
        count: number;
    }>;
    getRecommendedProducts(query: SearchDTO): Promise<import("../../../entities/index").ProductsEntity[]>;
    getProductsIdsByUserId(query: SearchByUserIdDTO): Promise<import("../../../entities/index").ProductsEntity[]>;
    getProductsByIds(body: SearchByIdsDTO): Promise<import("../../../entities/index").ProductsEntity[]>;
    getProduct(id: any): Promise<{
        productInfo: import("../../../entities/index").ProductsEntity;
        salesman: import("../../../entities/users.entity").UsersEntity & {
            isMe: boolean;
        };
        comments: {
            data: import("../../../entities/product_comments.entity").ProductCommentsEntity[];
            count: number;
        };
    }>;
    getUserProducts(id: any, page: any): Promise<{
        data: import("../../../entities/index").ProductsEntity[];
        count: number;
    }>;
}
