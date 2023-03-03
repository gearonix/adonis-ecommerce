import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ProductDTO } from './../dto'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductsEntity } from '@app/entities/products/products.entity'
import { Repository } from 'typeorm'
import { AuthService } from '@app/modules/auth'
import { UsersService } from '@app/modules/users'
import { FileDirectories } from '@app/types/global'
import { ServerExceptions } from '@app/types/exceptions'
import { isNumber } from '@app/lib/helpers'
import { FilesService } from '@modules/files/files.service'

@Injectable()
export class CreateProductService {
  constructor(
      @InjectRepository(ProductsEntity)
      private products: Repository<ProductsEntity>,
      private authService: AuthService,
      private usersService: UsersService,
      private fileService: FilesService
  ) {
  }
  async create(product: ProductDTO) {
    await this.authService.checkUserRole()
    const salesmanId = await this.authService.getUserId()

    return this.products.save({ ...product, salesmanId })
  }
  async setImages(images: any[], productId: string) {
    await this.authService.checkUserRole()
    if (!isNumber(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }


    const fileUrls = []
    for (const image of images) {
      const url = await this.fileService.uploadFile(image, FileDirectories.PRODUCT_IMAGES)
      fileUrls.push(url)
    }
    const salesmanId = await this.authService.getUserId()

    await this.products.update({ productId: +productId, salesmanId }, { images: fileUrls })

    return this.products.findOneBy({ productId: +productId })
  }
}
