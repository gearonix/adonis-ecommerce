import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductCommentsEntity, ProductsEntity, UsersEntity } from '@app/entities'
import { Repository } from 'typeorm'
import { AuthService } from '@app/modules/auth'
import { ServerExceptions } from '@app/types/exceptions'
import { NewCommentDTO } from '@app/modules/comments/dto'
import { withLimit } from '@app/lib/helpers'

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(ProductCommentsEntity)
                private productComments: Repository<ProductCommentsEntity>,
              @InjectRepository(ProductsEntity)
              private products: Repository<ProductsEntity>,
              private authService: AuthService
  ) {}

  async createProductComment({ message, productId }: NewCommentDTO) {
    const userId = await this.authService.getUserId()
    const newComment = await this.productComments.save({ message, productId, userId })
    return this.getCommentById(newComment.commentId)
  }
  async getProductComments(productId: number, page?: string) {
    if (isNaN(productId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }

    const [comments, count] = await this.productComments.findAndCount({
      relations: { user: true },
      where: { productId },
      select: ['message', 'likes', 'date', 'commentId'],
      order: { date: 'DESC' },
      ...withLimit(page)
    })
    return { data: comments, count }
  }

  async getCommentById(commentId: number) {
    return this.productComments.findOne({
      relations: { user: true },
      where: { commentId },
      select: ['message', 'likes', 'date', 'commentId']
    })
  }
}
