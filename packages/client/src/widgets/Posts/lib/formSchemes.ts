import { FieldCreator } from 'shared/lib/helpers'
import * as Yup from 'yup'

const creator = new FieldCreator()

export const addPostSchema = Yup.object().shape({
  message: creator.field('Post message', 8, 40),
  image: Yup.mixed().required('post message is required')
})
