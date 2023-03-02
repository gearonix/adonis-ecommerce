import {FC} from 'react'
import {AddPostTemplate} from 'entities/Profile/Post'
import {useForm} from 'shared/lib/hooks/common'
import {useDispatch} from 'shared/types/redux'
import {addPost} from 'widgets/Posts/store/thunks'
import {addPostSchema} from 'widgets/Posts/lib/formSchemes'
import {AddPostForm} from 'widgets/Posts/types'

interface AddPostProps{
  close: () => void
}


const AddPost : FC<AddPostProps> = ({close}) => {
  const {reg, submit} = useForm<AddPostForm>(addPostSchema)
  const dispatch = useDispatch()

  const onSubmit = (values: AddPostForm) => {
    dispatch(addPost(values))
    close()
  }

  return <AddPostTemplate reg={reg} submit={submit(onSubmit)} close={close}/>
}


export default AddPost
