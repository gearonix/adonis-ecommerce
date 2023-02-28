import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common'
import {CommentsService} from './comments.service'
import {AuthGuard} from '@routes/auth'

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('/products/create')
  @UseGuards(AuthGuard)
  createProductComment(@Body() body) {
    return this.commentsService.createProductComment(body.userId)
  }
  @Get('/products/:id')
  getProductComments(@Param('id') id) {
    return this.commentsService.getProductComments(+id)
  }
}
