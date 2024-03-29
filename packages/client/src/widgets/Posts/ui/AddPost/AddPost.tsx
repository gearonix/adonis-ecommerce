import { FC, useCallback } from 'react'
import { useDispatch } from 'shared/types/redux'
import { addPost } from 'widgets/Posts/store/thunks'
import { addPostSchema } from 'widgets/Posts/lib/formSchemes'
import { AddPostForm } from 'widgets/Posts/types'
import { useForm } from 'shared/lib/hooks/useForm'
import { AddPostTemplate } from 'entities/Profile'
import { postActions } from 'widgets/Posts'
import { WallPages } from 'widgets/Profile/types'

interface AddPostProps{
  close: () => void,
  setPage: (page: WallPages) => void
}


const AddPost : FC<AddPostProps> = ({ close, setPage }) => {
  const { reg, submit } = useForm<AddPostForm>(addPostSchema)
  const dispatch = useDispatch()

  const onSubmit = useCallback((values: AddPostForm) => {
    dispatch(postActions.setPage(0))
    dispatch(addPost(values))
    close()
    setPage(WallPages.posts)
  }, [])

  return <AddPostTemplate reg={reg} submit={submit(onSubmit)} close={close}/>
}


export default AddPost
