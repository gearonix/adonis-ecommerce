import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { PostSelectors, UserSelectors } from 'shared/selectors'
import { getUserPosts } from 'widgets/Posts/store/thunks'
import { Post } from 'entities/Profile'
import { postActions, postSlice } from 'widgets/Posts/store/postsReducer'
import { Pagination } from 'shared/ui/material'
import { PAGE_LIMIT } from 'app/config/globals'
import { DynamicModuleLoader } from 'shared/lib/components'

const Posts : FC = () => {
  console.log('LOADED')
  const posts = useSelector(PostSelectors.posts)
  const dispatch = useDispatch()
  const page = useSelector(PostSelectors.page)
  const totalCount = useSelector(PostSelectors.count)
  const userId = useSelector(UserSelectors.userId)
  useEffect(() => {
    dispatch(getUserPosts(page))
  }, [page, userId])

  useEffect(() => {
    return () => {
      dispatch(postActions.clearPosts())
    }
  }, [])

  const onPageChange = (page: number) => {
    dispatch(postActions.setPage(page))
  }


  return <>
    <h2>{totalCount}</h2>
    {posts.map((post) => {
      return <Post post={post} key={post.postId} />
    })}
    <Pagination count={totalCount / PAGE_LIMIT} onChange={onPageChange} page={page} />
  </>
}

export const PostsWithReducer = () => {
  return <DynamicModuleLoader name={'posts'} reducer={postSlice}>
    <Posts/>
  </DynamicModuleLoader>
}

export default PostsWithReducer
