import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductsEntity} from '@app/entities/products/products.entity'
import {Like, Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {UsersService} from '@routes/users'
import {PageLimits} from '@app/types/global'
import {ServerExceptions} from '@app/types/exceptions'
import {ifExist, withLimit} from '@app/lib/helpers'
import {SearchDTO} from '@routes/products/dto/searchDTO'

@Injectable()
export class ProductsService {
  constructor(
      @InjectRepository(ProductsEntity)
      private products: Repository<ProductsEntity>,
      private authService: AuthService,
      private usersService: UsersService,
  ) {
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

  async randomProducts(query: SearchDTO) {
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
  async userProducts(salesmanId: number, page: string) {
    const [data, count] = await this.products.findAndCount({
      where: {salesmanId},
      ...withLimit(page),
    })
    return {data, count}
  }
}
