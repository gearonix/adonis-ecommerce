import {FC} from 'react'
import {PostProps} from '../../types'
import {Comments} from '../Comments/Comments'
import {Post} from '../Post/Post'


const PostWrapper: FC<PostProps> = ({comment}) => {
  return <>
    <Post comment={comment}/>
    <Comments/>
  </>
}

export default PostWrapper
