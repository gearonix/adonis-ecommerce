import { ProductDTO } from './../dto';
import { CreateProductService } from './../services/createProduct.service';
export declare class CreateProductController {
    private createProductService;
    constructor(createProductService: CreateProductService);
    createProduct(product: ProductDTO): Promise<{
        salesmanId: number;
        name: string;
        price: number;
        rating: import("../../../entities/products/types").ProductRatings;
        description: string;
        inStock: boolean;
        images: string[];
        features: string[];
        material?: string;
        type: import("../../../entities/products/types").ProductTypes;
        design?: string;
        warrantyCount?: number;
        model: import("../../../entities/products/types").ProductModels;
        size?: "Very little" | "Small" | "Medium" | "Massive" | "Large" | "Epic";
    } & import("../../../entities/index").ProductsEntity>;
    setProductImages(images: any, productId: any): Promise<import("../../../entities/index").ProductsEntity>;
}
