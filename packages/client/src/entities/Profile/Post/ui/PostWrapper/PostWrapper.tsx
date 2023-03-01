import {FC} from 'react'
import {PostProps} from '../../types'
import {Comments} from '../Comments/Comments'
import {CommentWrapper} from '../CommentWrapper/CommentWrapper'


const PostWrapper: FC<PostProps> = ({comment}) => {
  return <>
    <CommentWrapper comment={comment}/>
    <Comments/>
  </>
}

export default PostWrapper
