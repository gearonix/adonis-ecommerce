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
  Query,
} from '@nestjs/common'
import {PostsService} from '@routes/posts/posts.service'
import {NewPostDTO} from '@routes/posts/dto/newPost.dto'
import {AuthGuard} from '@routes/auth'
import {FileInterceptor} from '@nestjs/platform-express'
import {FileDirectories} from '@app/types/global'

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/:id')
  getPosts(@Param('id') userId: number) {
    return this.postsService.getPostsByUserId(userId)
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
    console.log(image)
    return this.postsService.setPostImage(image, postId)
  }
}
