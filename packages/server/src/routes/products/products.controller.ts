import {Body, Controller, Get, Post, Query, UploadedFiles, UseGuards, UseInterceptors} from '@nestjs/common'
import {ProductsService} from '@routes/products/products.service'
import {ProductDTO} from './dto'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {FilesInterceptor} from '@nestjs/platform-express'

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post('/create')
  createProduct(@Body() product: ProductDTO) {
    return this.productsService.createProduct(product)
  }

  @Post('/set/images')
  @UseInterceptors(FilesInterceptor('product_images'))
  setProductImages(@UploadedFiles() images, @Query('product_id') productId) {
    return this.productsService.setProductImages(images, productId)
  }

  @Get()
  getProducts(@Query() query) {
    if (query.my) {
      return this.productsService.getMyProducts()
    }
    return []
  }
}
