import { FC, memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { Pagination } from 'shared/ui/material'
import { PAGE_LIMIT } from 'app/config/globals'
import { changeCommentsPage, productActions, ProductSelectors } from 'widgets/CurrentProduct'
import { CommentBar } from 'features/ProductPage'
import { CommentTemplate } from 'entities/Profile'
import s from './style.module.scss'


const ProductComments : FC = memo(() => {
  const comments = useSelector(ProductSelectors.comments)
  const page = useSelector(ProductSelectors.commentsPage)
  const totalCount = useSelector(ProductSelectors.commentsCount)
  const dispatch = useDispatch()

  const onChange = useCallback((page : number) => {
    dispatch(productActions.setCommentsPage(page))
  }, [])

  useEffect(() => {
    dispatch(changeCommentsPage(page))
  }, [page])

  return <div className={s.container}>
    <CommentBar />
    <div className={s.comments_block}>
      {comments?.map((comment) => {
        return <CommentTemplate comment={comment} key={comment.commentId}/>
      })}
    </div>
    <Pagination count={totalCount / PAGE_LIMIT} onChange={onChange} page={page} />
  </div>
})


export default ProductComments
