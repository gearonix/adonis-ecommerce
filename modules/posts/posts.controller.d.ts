import { PostsService } from '@app/modules/posts/posts.service';
import { NewPostDTO } from '@app/modules/posts/dto/newPost.dto';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getPosts(userId: number, page: any): Promise<{
        data: import("../../entities/posts.entity").PostsEntity[];
        count: number;
    }>;
    createPost(post: NewPostDTO): Promise<import("../../entities/posts.entity").PostsEntity>;
    setPostImage(image: any, postId: any): Promise<{
        fileUrl: string;
    }>;
}
