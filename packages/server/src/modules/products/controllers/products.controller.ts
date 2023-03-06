import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common'
import { SearchDTO } from '@app/modules/products/dto/searchDTO'
import { ProductsService } from '@modules/products/services'
import { SearchByUserIdDTO } from '@modules/products/dto'
import { SearchByIdsDTO } from '@modules/products/dto/searchByIdsDTO'
import { sleep } from '@app/lib/helpers'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts(@Query() query: SearchDTO) {
    return this.productsService.getProducts(query)
  }


  @Get('/recommended')
  getRecommendedProducts(@Query() query: SearchDTO) {
    return this.productsService.randomProducts(query)
  }

  @Get('/ids')
  getProductsIdsByUserId(@Query() query: SearchByUserIdDTO) {
    return this.productsService.getProductsIdsByUserId(+query.userId)
  }

  @Put('/ids')
  getProductsByIds(@Body() body: SearchByIdsDTO) {
    return this.productsService.getProductsByIds(body)
  }

  @Get(':id')
  async getProduct(@Param('id') id) {
    return this.productsService.getProduct(+id)
  }

  @Get('/user/:id')
  async getUserProducts(@Param('id') id, @Query('page') page) {
    return this.productsService.userProducts(+id, page)
  }
}
