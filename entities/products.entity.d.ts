import { UsersEntity } from '@entities/users.entity';
import { ProductModels, ProductRatings, ProductSizes, ProductTypes } from '@app/types/elements/types';
export declare class ProductsEntity {
    name: string;
    price: number;
    rating: ProductRatings;
    description: string;
    inStock: boolean;
    images: string[];
    salesmanId: number;
    features: string[];
    material: string;
    type: ProductTypes;
    design: string;
    warrantyCount: number;
    model: ProductModels;
    size: typeof ProductSizes[number];
    productId: number;
    creationDate: Date;
    savedCount: number;
    salesman: UsersEntity;
}
