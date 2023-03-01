import {Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common'
import {CommentsService} from './comments.service'
import {AuthGuard} from '@routes/auth'
import {NewCommentDTO} from '@routes/comments/dto/newComment.dto'

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
  getProductComments(@Param('id') id) {
    return this.commentsService.getProductComments(+id)
  }
}
