import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  UsePipes,
  ValidationPipe,
  Query
} from '@nestjs/common'
import { PostsService } from '@app/modules/posts/posts.service'
import { NewPostDTO } from '@app/modules/posts/dto/newPost.dto'
import { AuthGuard } from '@app/modules/auth'
import { FileInterceptor } from '@nestjs/platform-express'
import { FileDirectories } from '@app/types/global'

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/:id')
  getPosts(@Param('id') userId: number, @Query('page') page) {
    return this.postsService.getPostsByUserId(userId, page)
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard)
  createPost(@Body() post: NewPostDTO) {
    return this.postsService.createPost(post.message)
  }

  @Post('/set/images')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor(FileDirectories.POST_IMAGES))
  setPostImage(@UploadedFile() image, @Query('post_id') postId) {
    return this.postsService.setPostImage(image, postId)
  }
}
