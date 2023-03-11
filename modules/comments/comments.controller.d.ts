import { CommentsService } from './comments.service';
import { NewCommentDTO } from '@app/modules/comments/dto/newComment.dto';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    createProductComment(comment: NewCommentDTO): Promise<import("../../entities/product_comments.entity").ProductCommentsEntity>;
    getProductComments(id: any, page: any): Promise<{
        data: import("../../entities/product_comments.entity").ProductCommentsEntity[];
        count: number;
    }>;
}
