import * as Yup from 'yup'
import {EditProfileForm} from 'widgets/Profile/types'
import {ObjectNullable} from 'shared/types/common'
import {createField, createMaxLengthField, createOptionalField} from 'shared/lib/helpers/others/formHelpers'


export const editProfileSchema: Yup.SchemaOf<ObjectNullable<EditProfileForm>> = Yup.object().shape({
  firstName: createOptionalField('First name', 3, 10),
  lastName: createOptionalField('Last name', 3, 10),
  description: createMaxLengthField('Description', 55),
  country: createOptionalField('Your country', 3, 40),
  city: createOptionalField('Your city', 3, 40),

}).camelCase()

export const addProductSchema = Yup.object().shape({
  name: createField('Product Name', 4, 20),
  description: createMaxLengthField('Product description', 55),
  design: createMaxLengthField('Product design', 20),
  rating: Yup.number().min(1).max(5)
})
