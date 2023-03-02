import {FC} from 'react'
import {Post} from 'shared/types/slices'
import {NextImage} from 'shared/ui/kit'

interface PostProps{
  post: Post
}

const Post: FC<PostProps> = ({post}) => {
  const {user} = post
  return <>
    <h2>{post.message}</h2>
    <div style={{position: 'relative', width: '50px', height: '50px'}}>
      <NextImage src={post.image} />
    </div>
    <div style={{position: 'relative', width: '50px', height: '50px'}}>
      <NextImage src={user.avatar} />
    </div>
  </>
}

export default Post
