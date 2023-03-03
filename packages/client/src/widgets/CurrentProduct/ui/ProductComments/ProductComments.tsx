import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {ProductSelectors} from 'shared/selectors'
import {Comment} from 'entities/Profile/Post'
import {CommentBar} from 'features/ProductPage/CommentBar'
import {Pagination} from 'shared/ui/mui'
import {productActions} from 'widgets/CurrentProduct/store/productReducer'
import {PAGE_LIMIT} from 'app/config/globals'
import {changeCommentsPage} from 'widgets/CurrentProduct/store/thunks/comments/changeCommentsPage'


const ProductComments : FC = () => {
  const comments = useSelector(ProductSelectors.comments)
  const page = useSelector(ProductSelectors.commentsPage)
  const totalCount = useSelector(ProductSelectors.commentsCount)
  const dispatch = useDispatch()

  const onChange = (page : number) => {
    dispatch(productActions.setCommentsPage(page))
  }
  useEffect(() => {
    dispatch(changeCommentsPage(page))
  }, [page])

  return <>
    <CommentBar />
    {comments?.map((comment) => <Comment comment={comment} key={comment.commentId} />)}
    <Pagination count={totalCount / PAGE_LIMIT} onChange={onChange} page={page} />
  </>
}


export default ProductComments
