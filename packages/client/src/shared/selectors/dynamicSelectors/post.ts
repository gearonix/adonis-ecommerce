import { RequiredState } from 'app/store/types'

const PostSelectors = {
  posts: ({ posts }: RequiredState) => posts.data,
  count: ({ posts }: RequiredState) => posts.count,
  page: ({ posts }: RequiredState) => posts.page,
  isLoading: ({ posts }: RequiredState) => posts.isLoading
}


export default PostSelectors
