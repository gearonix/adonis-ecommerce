import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {PostsEntity} from '@app/entities'
import {Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {FilesService} from '@modules/files/files.service'
import {FileDirectories} from '@app/types/global'

@Injectable()
export class PostsService {
  constructor(@InjectRepository(PostsEntity)
                private posts: Repository<PostsEntity>,
              private authService: AuthService,
              private fileService: FilesService,
  ) {}

  async getPostsByUserId(userId: number) {
    return this.posts.find({
      relations: {user: true},
      where: {userId},
      order: {date: 'DESC'},
    })
  }
  async createPost(message: string) {
    const userId = await this.authService.getUserId()
    const post = await this.posts.save({userId, message})
    return this.getPostById(post.postId)
  }
  async setPostImage(image: any, postId: number) {
    const fileUrl = await this.fileService.uploadFile(image, FileDirectories.POST_IMAGES)
    await this.posts.update({postId}, {image: fileUrl})
    return {fileUrl}
  }


  private async getPostById(postId: number) {
    return this.posts.findOne({
      relations: {user: true},
      where: {postId},
    })
  }
}
