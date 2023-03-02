import {AppState} from 'shared/types/redux'

const PostSelectors = {
  posts: ({posts}: AppState) => posts,
}


export default PostSelectors
