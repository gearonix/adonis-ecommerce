import {createThunk} from 'shared/types/redux'
import {PostsApi} from 'widgets/Posts/postsApi'
import {postActions} from 'widgets/Posts/store/postsReducer'
import {isResponseError} from 'shared/lib/helpers/others/httpHelpers'
import {UserSelectors} from 'shared/selectors'

export const getUserPosts = createThunk('posts/GET_USER_POSTS',
    async (page : number, {dispatch, getState}) => {
      const userId = UserSelectors.userId(getState())
      if (!userId) return
      const response = await PostsApi.getPosts(userId, page)
      if (isResponseError(response)) return
      dispatch(postActions.setPosts(response.data))
    })
