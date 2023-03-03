import { FieldCreator } from 'shared/lib/helpers'
import * as Yup from 'yup'

const creator = new FieldCreator()

export const addPostSchema = Yup.object().shape({
  message: creator.field('Post message'),
  image: Yup.mixed().required('post message is required')
})
