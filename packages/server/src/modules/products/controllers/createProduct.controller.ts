import { Body, Controller, Post, Query, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common'
import { ProductDTO } from './../dto'
import { AuthGuard } from '@app/modules/auth/auth.guard'
import { FilesInterceptor } from '@nestjs/platform-express'
import { CreateProductService } from './../services/createProduct.service'
import { FileDirectories } from '@app/types/global'

@Controller('products')
export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

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
}
