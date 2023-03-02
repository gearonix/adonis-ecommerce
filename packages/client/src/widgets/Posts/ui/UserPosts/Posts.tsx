import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {PostSelectors} from 'shared/selectors'
import {getUserPosts} from 'widgets/Posts/store/thunks'
import {Post} from 'entities/Profile/Post'

const Posts : FC = () => {
  const posts = useSelector(PostSelectors.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserPosts())
  }, [])
  return <>
    {posts.map((post) => {
      return <Post post={post} key={post.postId} />
    })}
  </>
}


export default Posts
