import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { AuthGuard } from '@app/modules/auth'
import { NewCommentDTO } from '@app/modules/comments/dto/newComment.dto'

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('/products/create')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  createProductComment(@Body() comment: NewCommentDTO) {
    return this.commentsService.createProductComment(comment)
  }
  @Get('/products/:id')
  getProductComments(@Param('id') id, @Query('page') page) {
    return this.commentsService.getProductComments(+id, page)
  }
}
