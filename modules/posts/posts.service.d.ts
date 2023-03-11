import { PostsEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { AuthService } from '@app/modules/auth';
import { FilesService } from '../files/files.service';
export declare class PostsService {
    private posts;
    private authService;
    private fileService;
    constructor(posts: Repository<PostsEntity>, authService: AuthService, fileService: FilesService);
    getPostsByUserId(userId: number, page: string): Promise<{
        data: PostsEntity[];
        count: number;
    }>;
    createPost(message: string): Promise<PostsEntity>;
    setPostImage(image: any, postId: number): Promise<{
        fileUrl: string;
    }>;
    private getPostById;
}
