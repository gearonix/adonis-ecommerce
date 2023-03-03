import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { ProductSelectors } from 'shared/selectors'
import { Pagination } from 'shared/ui/material'
import { PAGE_LIMIT } from 'app/config/globals'
import { changeCommentsPage, productActions } from 'widgets/CurrentProduct'
import { CommentBar } from 'features/ProductPage'
import { CommentTemplate } from 'entities/Profile'


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
    {comments?.map((comment) => {
      return <CommentTemplate comment={comment} key={comment.commentId} />
    })}
    <Pagination count={totalCount / PAGE_LIMIT} onChange={onChange} page={page} />
  </>
}


export default ProductComments
