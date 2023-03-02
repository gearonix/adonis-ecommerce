import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductCommentsEntity, ProductsEntity, UsersEntity} from '@app/entities'
import {Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {ServerExceptions} from '@app/types/exceptions'
import {NewCommentDTO} from '@routes/comments/dto'

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(ProductCommentsEntity)
                private productComments: Repository<ProductCommentsEntity>,
              @InjectRepository(ProductsEntity)
              private products: Repository<ProductsEntity>,
              private authService: AuthService,
  ) {}

  async createProductComment({message, productId}: NewCommentDTO) {
    const userId = await this.authService.getUserId()
    const newComment = await this.productComments.save({message, productId, userId})
    return this.getCommentById(newComment.commentId)
  }
  async getProductComments(productId: number) {
    if (isNaN(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    return this.productComments.find({
      relations: {user: true},
      where: {productId},
      select: ['message', 'likes', 'date', 'commentId'],
      order: {date: 'DESC'},
    })
  }

  async getCommentById(commentId: number) {
    return this.productComments.findOne({
      relations: {user: true},
      where: {commentId},
      select: ['message', 'likes', 'date', 'commentId'],
    })
  }
}
