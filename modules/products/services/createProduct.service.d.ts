import { ProductDTO } from './../dto';
import { ProductsEntity } from '@entities/products.entity';
import { Repository } from 'typeorm';
import { AuthService } from '@app/modules/auth';
import { UsersService } from '@app/modules/users';
import { FilesService } from '@modules/files/files.service';
export declare class CreateProductService {
    private products;
    private authService;
    private usersService;
    private fileService;
    constructor(products: Repository<ProductsEntity>, authService: AuthService, usersService: UsersService, fileService: FilesService);
    create(product: ProductDTO): Promise<{
        salesmanId: number;
        name: string;
        price: number;
        rating: import("../../../types/elements/types").ProductRatings;
        description: string;
        inStock: boolean;
        images: string[];
        features: string[];
        material?: string;
        type: import("../../../types/elements/types").ProductTypes;
        design?: string;
        warrantyCount?: number;
        model: import("../../../types/elements/types").ProductModels;
        size?: "Very little" | "Small" | "Medium" | "Massive" | "Large" | "Epic";
    } & ProductsEntity>;
    setImages(images: any[], productId: string): Promise<ProductsEntity>;
}
