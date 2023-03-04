import { createThunk } from 'shared/types/redux'
import { postsApi } from 'widgets/Posts/api'
import { postActions } from 'widgets/Posts/store/postsReducer'
import { isError } from 'shared/lib/helpers/others/httpHelpers'
import { UserSelectors } from 'shared/selectors'

export const getUserPosts = createThunk('posts/GET_USER_POSTS',
    async (page : number, { dispatch, getState, extra }) => {
      const userId = UserSelectors.userId(getState())
      if (!userId) return
      const response = await extra.api.posts.getPosts(userId, page)
      if (isError(response)) return
      dispatch(postActions.setPosts(response.data))
    })
