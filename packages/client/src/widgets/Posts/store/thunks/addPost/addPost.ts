import { createThunk } from 'shared/types/redux'
import { postActions } from 'widgets/Posts'
import { UploadProperties } from 'app/config/globals'
import { AddPostForm } from 'widgets/Posts/types'
import { withFormData, isError } from 'shared/lib/helpers'

export const addPost = createThunk('posts/ADD_POST',
    async (values: AddPostForm, { dispatch, extra }) => {
      const newPost = await extra.api.posts.add(values.message)
      if (isError(newPost)) return

      const createFormData = withFormData(UploadProperties.POST_IMAGES)
      const formData = createFormData(values.image)

      const response = await extra.api.posts.setImage(formData, newPost.data.postId)
      if (isError(response)) return
      const image = response.data.fileUrl

      dispatch(postActions.addPost({ ...newPost.data, image }))
    })
