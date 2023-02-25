import {Body, Controller, Get, Post, Query, UploadedFiles, UseGuards, UseInterceptors} from '@nestjs/common'
import {ProductsService} from '@routes/products/products.service'
import {ProductDTO} from './dto'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {FilesInterceptor} from '@nestjs/platform-express'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  createProduct(@Body() product: ProductDTO) {
    return this.productsService.createProduct(product)
  }

  @Post('/set/images')
  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor('product_images'))
  setProductImages(@UploadedFiles() images, @Query('product_id') productId) {
    return this.productsService.setProductImages(images, productId)
  }

  @Get()
  getProducts(@Query() query) {
    return this.productsService.getProducts(query)
  }

  @Get('/my')
  @UseGuards(AuthGuard)
  getMyProducts() {
    return this.productsService.getMyProducts()
  }

  @Get('/recommended')
  getRecommendedProducts(@Query() query) {
    return this.productsService.getRandomProducts(query)
  }
}
