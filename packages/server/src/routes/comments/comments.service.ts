import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductCommentsEntity, ProductsEntity, UsersEntity} from '@app/entities'
import {Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {ServerExceptions} from '@app/types/exceptions'

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(ProductCommentsEntity)
                private productComments: Repository<ProductCommentsEntity>,
              @InjectRepository(ProductsEntity)
              private products: Repository<ProductsEntity>,
              private authService: AuthService,
  ) {}

  async createProductComment({message, productId}: any) {
    const userId = await this.authService.getUserId()
    return this.productComments.save({message, productId, userId})
  }
  async getProductComments(productId: number) {
    if (isNaN(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    return this.productComments.find({
      relations: {user: true},
      where: {productId},
      select: ['message', 'likes', 'date', 'commentId'],
    })
  }
}
