import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { ProductDTO } from './dto'
import { AuthGuard } from '@app/modules/auth/auth.guard'
import { FilesInterceptor } from '@nestjs/platform-express'
import { SearchDTO } from '@app/modules/products/dto/searchDTO'
import { ProductsService } from './services/products.service'
import { CreateProductService } from './services/createProduct.service'
import { SavedService } from '@app/modules/products/services/saved.service'
import { FileDirectories } from '@app/types/global'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService,
              private createProductService: CreateProductService,
              private savedSerice: SavedService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  createProduct(@Body() product: ProductDTO) {
    return this.createProductService.create(product)
  }

  @Post('/set/images')
  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor(FileDirectories.PRODUCT_IMAGES))
  setProductImages(@UploadedFiles() images, @Query('product_id') productId) {
    return this.createProductService.setImages(images, productId)
  }

  @Get()
  getProducts(@Query() query: SearchDTO) {
    return this.productsService.getProducts(query)
  }


  @Get('/recommended')
  getRecommendedProducts(@Query() query: SearchDTO) {
    return this.productsService.randomProducts(query)
  }

  @Get('/saved')
  @UseGuards(AuthGuard)
  getSavedProducts() {
    return this.savedSerice.getSavedProducts()
  }


  @Get('/ids')
  getProductsIdsByUserId(@Query() query) {
    return this.productsService.getProductsIdsByUserId(+query.userId)
  }

  @Put('/ids')
  getProductsByIds(@Body() body) {
    return this.productsService.getProductsByIds(body.ids)
  }

  @Post('/saved/add')
  @UseGuards(AuthGuard)
  addToSaved(@Body() body) {
    return this.savedSerice.addToSaved(body.productId)
  }

  @Delete('/saved/remove')
  @UseGuards(AuthGuard)
  removeFromSaved(@Body() body) {
    return this.savedSerice.removeFromSaved(body.productId)
  }

  @Get(':id')
  getProduct(@Param('id') id) {
    return this.productsService.getProduct(+id)
  }

  @Get('/user/:id')
  getUserProducts(@Param('id') id, @Query('page') page) {
    return this.productsService.userProducts(+id, page)
  }
}
