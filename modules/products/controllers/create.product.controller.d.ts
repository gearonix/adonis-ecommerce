import { ProductDTO } from './../dto';
import { CreateProductService } from '@modules/products/services';
export declare class CreateProductController {
    private createProductService;
    constructor(createProductService: CreateProductService);
    createProduct(product: ProductDTO): Promise<{
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
    } & import("../../../entities/products.entity").ProductsEntity>;
    setProductImages(images: any, productId: any): Promise<import("../../../entities/products.entity").ProductsEntity>;
}
