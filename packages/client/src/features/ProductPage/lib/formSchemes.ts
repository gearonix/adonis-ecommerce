import { FieldCreator } from 'shared/lib/helpers'
import * as Yup from 'yup'

const creator = new FieldCreator()
export const addCommentSchema = Yup.object().shape({
  message: creator.field('Comment message', 4, 70)
})
