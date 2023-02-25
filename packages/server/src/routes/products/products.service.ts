import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {ProductDTO} from './dto'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductsEntity} from '@app/entities/products/products.entity'
import {Like, Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {UsersService} from '@routes/users'
import {FileDirectories, PageLimits, Roles} from '@app/types/global'
import {ServerExceptions} from '@app/types/exceptions'
import {FilesService} from '@modules/files/files.service'
import {ifExist, isNumber, withLimit} from '@app/lib/helpers'
import {SearchDTO} from '@routes/products/dto/searchDTO'

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

  async getMyProducts(page : string) {
    await this.checkUserRole()
    const salesmanId = await this.authService.getUserIdByPayload()

    const [data, count] = await this.products.findAndCount({
      where: {salesmanId},
      ...withLimit(page),
    })
    return {data, count}
  }

  async getProducts(query: SearchDTO) {
    const {size, model, type, rating, search, inStock} = query
    const [data, count] = await this.products.findAndCount({
      where: {
        size,
        model,
        type,
        rating,
        name: ifExist(search, Like(`%${search}%`)),
        inStock: ifExist(inStock === 'true', true),
      },
      ...withLimit(query.page),
    },
    )
    return {data, count}
  }

  async getRandomProducts(query: SearchDTO) {
    return this.products.createQueryBuilder().orderBy('RAND()')
        .limit(PageLimits.RECOMMENDED).where(query).getMany()
  }

  async getProduct(productId: number) {
    if (isNaN(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    const product = await this.products.findOneBy({productId})
    const salesman = await this.usersService.getUserById(product.salesmanId)
    return {
      ...product,
      salesman,
    }
  }
}
