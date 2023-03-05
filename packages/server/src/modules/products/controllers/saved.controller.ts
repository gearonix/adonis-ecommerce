import { Body, Controller, Delete, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { AuthGuard } from '@app/modules/auth/auth.guard'
import { ProductsService, CreateProductService } from '@modules/products/services'
import { SavedService } from '@app/modules/products/services/saved.service'
import { SearchByProductIdDTO } from '@modules/products/dto/searchByIdsDTO'

@Controller('products/saved')
export class SavedProductsController {
  constructor(private productsService: ProductsService,
              private createProductService: CreateProductService,
              private savedService: SavedService) {}

  @Get('/items')
  @UseGuards(AuthGuard)
  getSavedProducts() {
    return this.savedService.getSavedProducts()
  }
  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  addToSaved(@Body() body: SearchByProductIdDTO) {
    return this.savedService.addToSaved(body.productId)
  }

  @Delete()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  removeFromSaved(@Body() body: SearchByProductIdDTO) {
    return this.savedService.removeFromSaved(body.productId)
  }
}
