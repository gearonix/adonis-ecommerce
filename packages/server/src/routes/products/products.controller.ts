import {Body, Controller, Get, Param, Post, Query, UploadedFiles, UseGuards, UseInterceptors} from '@nestjs/common'
import {ProductDTO} from './dto'
import {AuthGuard} from '@app/routes/auth/auth.guard'
import {FilesInterceptor} from '@nestjs/platform-express'
import {SearchDTO} from '@routes/products/dto/searchDTO'
import {ProductsService} from './services/products.service'
import {CreateProductService} from './services/createProduct.service'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService,
              private createProductService: CreateProductService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  createProduct(@Body() product: ProductDTO) {
    return this.createProductService.create(product)
  }

  @Post('/set/images')
  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor('product_images'))
  setProductImages(@UploadedFiles() images, @Query('product_id') productId) {
    return this.createProductService.setImages(images, productId)
  }

  @Get()
  getProducts(@Query() query: SearchDTO) {
    return this.productsService.getProducts(query)
  }

  @Get('/user/:id')
  getUserProducts(@Param('id') id, @Query('page') page) {
    return this.productsService.userProducts(+id, page)
  }

  @Get('/recommended')
  getRecommendedProducts(@Query() query: SearchDTO) {
    return this.productsService.randomProducts(query)
  }

  @Get(':id')
  getProduct(@Param('id') id) {
    return this.productsService.getProduct(+id)
  }
}
