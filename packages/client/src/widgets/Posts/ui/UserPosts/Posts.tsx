import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { PostSelectors, UserSelectors } from 'shared/selectors'
import { getUserPosts } from 'widgets/Posts/store/thunks'
import { Post } from './../../../../entities/Profile'
import { postActions, postSlice } from 'widgets/Posts/store/slice/postsReducer'
import { Pagination } from 'shared/ui/material'
import { PAGE_LIMIT } from 'app/config/globals'
import { DynamicModuleLoader } from 'shared/lib/components'
import { WithLoading } from 'shared/ui/kit'
import { AiOutlineFileSearch as PostIcon } from 'shared/ui/icons'

const Posts : FC = () => {
  const posts = useSelector(PostSelectors.posts)
  const isLoading = useSelector(PostSelectors.isLoading)
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
    <WithLoading when={!posts.length} title={'Posts'} Icon={PostIcon} loading={isLoading}>
      {posts.map((post) => {
        return <Post post={post} key={post.postId} />
      })}
      <Pagination count={totalCount / PAGE_LIMIT} onChange={onPageChange} page={page} />
    </WithLoading>
  </>
}

export const PostsWithReducer = () => {
  return <DynamicModuleLoader name={'posts'} reducer={postSlice}>
    <Posts/>
  </DynamicModuleLoader>
}

export default PostsWithReducer
