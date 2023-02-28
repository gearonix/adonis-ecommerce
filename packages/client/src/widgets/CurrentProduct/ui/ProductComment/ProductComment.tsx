import {FC} from 'react'
import {useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {PostWrapper} from 'entities/Profile/Post'

interface ProductCommentProps{

}


const ProductComment : FC<ProductCommentProps> = () => {
  const comments = useSelector(ProductSelectors.comments)
  return <>{comments?.map((comment) => <PostWrapper comment={comment} key={comment.commentId} />)}</>
}


export default ProductComment
