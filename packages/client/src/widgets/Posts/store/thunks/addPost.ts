import { createThunk } from 'shared/types/redux'
import { PostsApi } from 'widgets/Posts/api'
import { postActions } from 'widgets/Posts'
import { UploadProperties } from 'app/config/globals'
import { AddPostForm } from 'widgets/Posts/types'
import { withFormData, isError } from 'shared/lib/helpers'

export const addPost = createThunk('posts/ADD_POST',
    async (values: AddPostForm, { dispatch }) => {
      const newPost = await PostsApi.addPosts(values.message)
      if (isError(newPost)) return

      const createFormData = withFormData(UploadProperties.POST_IMAGES)
      const formData = createFormData(values.image)

      const response = await PostsApi.setPostImage(formData, newPost.data.postId)
      if (isError(response)) return
      const image = response.data.fileUrl

      dispatch(postActions.addPost({ ...newPost.data, image }))
    })
