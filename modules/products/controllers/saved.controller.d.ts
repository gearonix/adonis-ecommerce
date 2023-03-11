import { ProductsService, CreateProductService } from '@modules/products/services';
import { SavedService } from '@app/modules/products/services/saved.service';
import { SearchByProductIdDTO } from '@modules/products/dto/searchByIdsDTO';
export declare class SavedProductsController {
    private productsService;
    private createProductService;
    private savedService;
    constructor(productsService: ProductsService, createProductService: CreateProductService, savedService: SavedService);
    getSavedProducts(): Promise<import("../../../entities/saved.entity").SavedEntity[]>;
    addToSaved(body: SearchByProductIdDTO): Promise<{
        userId: number;
        productId: number;
    } & import("../../../entities/saved.entity").SavedEntity>;
    removeFromSaved(body: SearchByProductIdDTO): Promise<import("typeorm").DeleteResult>;
}
