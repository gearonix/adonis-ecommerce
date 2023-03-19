import { Repository } from 'typeorm';
import { AuthService } from '@app/modules/auth';
import { SavedEntity } from '@app/entities/saved.entity';
import { ProductsService } from '@modules/products/services/products.service';
export declare class SavedService {
    private saved;
    private authService;
    private productsService;
    constructor(saved: Repository<SavedEntity>, authService: AuthService, productsService: ProductsService);
    addToSaved(productId: number): Promise<{
        userId: number;
        productId: number;
    } & SavedEntity>;
    removeFromSaved(productId: number): Promise<import("typeorm").DeleteResult>;
    getSavedProducts(id?: number): Promise<SavedEntity[]>;
}
