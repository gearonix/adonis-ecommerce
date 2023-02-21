import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {ProductDTO} from './dto'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductsEntity} from '@app/entities/products/products.entity'
import {Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {UsersService} from '@routes/users'
import {FileDirectories, Roles} from '@app/types/models'
import {ServerExceptions} from '@app/types/exceptions'
import {FilesService} from '@modules/files/files.service'

@Injectable()
export class ProductsService {
  constructor(
      @InjectRepository(ProductsEntity)
      private products: Repository<ProductsEntity>,
      private authService: AuthService,
      private usersService: UsersService,
      private fileService: FilesService,
  ) {
  }
  async createProduct(product: ProductDTO) {
    await this.checkUserRole()
    return this.products.save(product)
  }
  async setProductImages(images: any[], productId: number) {
    await this.checkUserRole()

    const fileUrls = []
    for (const image of images) {
      const url = await this.fileService.uploadFile(image, FileDirectories.PRODUCT_IMAGES)
      fileUrls.push(url)
    }

    // await this.products.update()
  }


  private async checkUserRole() {
    const userId = await this.authService.getUserIdByPayload()
    const userRole = await this.usersService.getUserRoleById(userId)

    if (userRole !== Roles.SALESMAN) {
      throw new HttpException(ServerExceptions.FORBIDDEN, HttpStatus.FORBIDDEN)
    }
  }
}
