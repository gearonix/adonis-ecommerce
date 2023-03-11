import { ProductModels, ProductRatings, ProductSizes, ProductTypes } from '@app/entities/products/types';
export declare class ProductDTO {
    readonly name: string;
    readonly price: number;
    readonly rating: ProductRatings;
    readonly description: string;
    readonly inStock: boolean;
    readonly images: string[];
    readonly features: string[];
    readonly material?: string;
    readonly type: ProductTypes;
    readonly design?: string;
    readonly warrantyCount?: number;
    readonly model: ProductModels;
    readonly size?: typeof ProductSizes[number];
}
