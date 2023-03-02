import {createThunk} from 'shared/types/redux'
import {UserSelectors} from 'shared/selectors'
import {PostsApi} from 'widgets/Posts/postsApi'
import {postActions} from 'widgets/Posts/store/postsReducer'
import {isResponseError} from 'shared/lib/helpers/others/httpHelpers'

export const getUserPosts = createThunk('posts/GET_USER_POSTS',
    async (_, {dispatch, getState}) => {
      const userId = UserSelectors.selectMyOrUserId(getState())
      const response = await PostsApi.getPosts(userId)
      if (isResponseError(response)) return
      dispatch(postActions.setPosts(response.data))
    })
