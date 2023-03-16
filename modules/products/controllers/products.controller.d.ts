import { SearchDTO } from '@app/modules/products/dto/searchDTO';
import { ProductsService } from '@modules/products/services';
import { SearchByUserIdDTO } from '@modules/products/dto';
import { SearchByIdsDTO } from '@modules/products/dto/searchByIdsDTO';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(query: SearchDTO): Promise<{
        data: import("../../../entities/products.entity").ProductsEntity[];
        count: number;
    }>;
    getRecommendedProducts(query: SearchDTO): Promise<import("../../../entities/products.entity").ProductsEntity[]>;
    getProductsIdsByUserId(query: SearchByUserIdDTO): Promise<import("../../../entities/products.entity").ProductsEntity[]>;
    getProductsByIds(body: SearchByIdsDTO): Promise<import("../../../entities/products.entity").ProductsEntity[]>;
    getProduct(id: any): Promise<{
        productInfo: import("../../../entities/products.entity").ProductsEntity;
        salesman: {
            isMe: boolean;
            status: import("../../../types/global").UserStatus;
            role: import("../../../types/global").Roles;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            avatar: string;
            background: string;
            description: string;
            userId: number;
            country: string;
            city: string;
            registration_date: Date;
            google_sub: string;
            user: import("../../../entities/users.entity").UsersEntity[];
        };
        comments: {
            data: import("../../../entities/product-comments.entity").ProductCommentsEntity[];
            count: number;
        };
    }>;
    getUserProducts(id: any, page: any): Promise<{
        data: import("../../../entities/products.entity").ProductsEntity[];
        count: number;
    }>;
}
