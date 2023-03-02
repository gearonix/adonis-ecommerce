import * as Yup from 'yup'
import {FieldCreator} from 'shared/lib/helpers/others'

const creator = new FieldCreator()

export const addPostSchema = Yup.object().shape({
  message: creator.field('Post message'),
  image: Yup.mixed().required('post message is required'),
})
