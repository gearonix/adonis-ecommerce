import {FC} from 'react'
import {useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {Comment} from 'entities/Profile/Post'
import {CommentBar} from 'features/ProductPage/CommentBar'
import {Pagination} from 'shared/ui/mui'


const ProductComment : FC = () => {
  const comments = useSelector(ProductSelectors.comments)
  return <>
    <CommentBar />
    {comments?.map((comment) => <Comment comment={comment} key={comment.commentId} />)}
    <Pagination count={10} onChange={() => {}} page={2} />
  </>
}


export default ProductComment
