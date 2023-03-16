import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductsEntity } from '@entities/products.entity'
import { In, Like, Repository } from 'typeorm'
import { AuthService } from '@app/modules/auth'
import { UsersService } from '@app/modules/users'
import { PAGE_LIMIT } from '@app/types/global'
import { ServerExceptions } from '@app/types/exceptions'
import { ifExist, withLimit } from '@app/lib/helpers'
import { SearchDTO } from '@app/modules/products/dto/searchDTO'
import { SavedService } from '@app/modules/products/services/saved.service'
import { CommentsService } from '@app/modules/comments/comments.service'
import { SearchByIdsDTO } from '@modules/products/dto'

@Injectable()
export class ProductsService {
  constructor(
      @InjectRepository(ProductsEntity)
      private products: Repository<ProductsEntity>,
      private authService: AuthService,
      private usersService: UsersService,
      private savedService: SavedService,
      private commentsService: CommentsService
  ) {
  }

  async getProducts(query: SearchDTO) {
    const { size, model, type, rating, search, inStock } = query
    const [data, count] = await this.products.findAndCount({
      where: {
        size,
        model,
        type,
        rating,
        name: ifExist(search, Like(`%${search}%`)),
        inStock: ifExist(inStock === 'true', true)
      },
      ...withLimit(query.page)
    }
    )
    return { data, count }
  }

  async randomProducts(query: SearchDTO) {
    return this.products.createQueryBuilder().orderBy('RAND()')
        .limit(PAGE_LIMIT).where(query).getMany()
  }

  async getProduct(productId: number) {
    if (isNaN(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    const productInfo = await this.products.findOneBy({ productId })
    const salesman = await this.usersService.getUserById(productInfo.salesmanId)
    const comments = await this.commentsService.getProductComments(productId)
    return {
      productInfo,
      salesman,
      comments
    }
  }
  async userProducts(salesmanId: number, page: string) {
    const [data, count] = await this.products.findAndCount({
      where: { salesmanId },
      order: { productId: 'DESC' },
      ...withLimit(page)
    })
    return { data, count }
  }
  async getProductsIdsByUserId(salesmanId : number) {
    if (isNaN(salesmanId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }
    const saved = await this.savedService.getSavedProducts(salesmanId)

    return this.products.find(
        { where: { productId: In(saved?.map((i) => i.productId)) },
          order: { productId: 'DESC' } })
  }

  async getProductsByIds(body: SearchByIdsDTO) {
    return this.products.find({ where: { productId: In(body.ids) } })
  }
}
