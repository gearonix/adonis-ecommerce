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
import {isNumber} from '@app/lib/helpers'

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
    const salesmanId = await this.authService.getUserIdByPayload()

    return this.products.save({...product, salesmanId})
  }
  async setProductImages(images: any[], productId: string) {
    await this.checkUserRole()
    if (!isNumber(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }


    const fileUrls = []
    for (const image of images) {
      const url = await this.fileService.uploadFile(image, FileDirectories.PRODUCT_IMAGES)
      fileUrls.push(url)
    }
    const salesmanId = await this.authService.getUserIdByPayload()

    await this.products.update({productId: +productId, salesmanId}, {images: fileUrls})

    return await this.products.findOneBy({productId: +productId})
  }


  private async checkUserRole() {
    const userId = await this.authService.getUserIdByPayload()
    const userRole = await this.usersService.getUserRoleById(userId)

    if (userRole !== Roles.SALESMAN) {
      throw new HttpException(ServerExceptions.FORBIDDEN, HttpStatus.FORBIDDEN)
    }
  }

  async getMyProducts() {
    await this.checkUserRole()
    const salesmanId = await this.authService.getUserIdByPayload()

    return this.products.find({where: {salesmanId}})
  }

  async getProducts(query: any) {
    return this.products.find({
      where: query,
    })
  }

  async getRandomProducts() {
    return this.products.createQueryBuilder().orderBy('RAND()').limit(8).getMany()
  }
}
