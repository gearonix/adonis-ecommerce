import {AppState} from 'shared/types/redux'

const PostSelectors = {
  posts: ({posts}: AppState) => posts.data,
  count: ({posts}: AppState) => posts.count,
  page: ({posts}: AppState) => posts.page,
}


export default PostSelectors
