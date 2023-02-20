import {Body, Controller, Post} from '@nestjs/common'
import {ProductsService} from '@routes/products/products.service'
import {ProductDTO} from './dto'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post('/create')
  createProduct(@Body() product: ProductDTO) {
    this.productsService.createProduct(product)
  }
}
