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
import {isExist, isNumber} from '@app/lib/helpers'

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

    const [data, count] = await this.products.findAndCount({where: {salesmanId}})
    return {data, count}
  }

  async getProducts(query: any) {
    const {size, model, type, rating, search} = query
    console.log(query.page)
    const [data, count] = await this.products.findAndCount({
      where: {size, model, type, rating, name: isExist(search, Like(`%${search}%`))},
      take: PageLimits.PRODUCTS,
      skip: query.page * PageLimits.PRODUCTS,
    },
    )
    return {data, count}
  }

  async getRandomProducts(query: any) {
    return this.products.createQueryBuilder().orderBy('RAND()')
        .limit(PageLimits.RECOMMENDED).where(query).getMany()
  }
}
