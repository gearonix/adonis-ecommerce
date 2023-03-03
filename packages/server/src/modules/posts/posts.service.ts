import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PostsEntity } from '@app/entities'
import { Repository } from 'typeorm'
import { AuthService } from '@app/modules/auth'
import { FileDirectories } from '@app/types/global'
import { withLimit } from '@app/lib/helpers'
import { FilesService } from '../files/files.service'

@Injectable()
export class PostsService {
  constructor(@InjectRepository(PostsEntity)
                private posts: Repository<PostsEntity>,
              private authService: AuthService,
              private fileService: FilesService
  ) {}

  async getPostsByUserId(userId: number, page: string) {
    const [posts, count] = await this.posts.findAndCount({
      relations: { user: true },
      where: { userId },
      order: { date: 'DESC' },
      ...withLimit(page)
    })
    return { data: posts, count }
  }
  async createPost(message: string) {
    const userId = await this.authService.getUserId()
    const post = await this.posts.save({ userId, message })
    return this.getPostById(post.postId)
  }
  async setPostImage(image: any, postId: number) {
    const fileUrl = await this.fileService.uploadFile(image, FileDirectories.POST_IMAGES)
    await this.posts.update({ postId }, { image: fileUrl })
    return { fileUrl }
  }


  private async getPostById(postId: number) {
    return this.posts.findOne({
      relations: { user: true },
      where: { postId }
    })
  }
}
