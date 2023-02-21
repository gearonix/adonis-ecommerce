import * as Yup from 'yup'
import {EditProfileForm} from 'widgets/Profile/types'
import {ObjectNullable} from 'shared/types/common'
import {FieldCreator} from 'shared/lib/helpers/others/formHelpers/fieldCreator'
import {asNormalString} from 'shared/lib/helpers/others/formHelpers/fieldAddons'
import {formErrors} from 'shared/lib/helpers/others'

const creator = new FieldCreator()

export const editProfileSchema: Yup.SchemaOf<ObjectNullable<EditProfileForm>> = Yup.object().shape({
  firstName: asNormalString(creator.optional('First name', 3, 10), 'First name'),
  lastName: asNormalString(creator.optional('Last name', 3, 10), 'Last name'),
  description: creator.optionalMaxLength('Description', 55),
  country: creator.optional('Your country', 3, 40),
  city: creator.optional('Your city', 3, 40),

})

export const addProductSchema = Yup.object().shape({
  name: asNormalString(creator.field('Product Name', 4, 20), 'Product Name'),
  description: creator.optionalMaxLength('Product description', 55),
  design: asNormalString(creator.optionalMaxLength('Product design', 20), 'Product design'),
  rating: Yup.number().min(1).max(5),
  inStock: Yup.boolean(),
  price: creator.number('Price'),
  warrantyCount: creator.number('Warranty count', 1, 10),
  type: creator.field('Product type', 1, 100),
  size: creator.field('Product size', 1, 100),
  model: creator.field('Product model', 1, 100),
  features: Yup.array(),
  images: Yup.array().min(1, formErrors.oneImage('Your product'))
      .max(4, formErrors.moreImages('Your product', 4)),
})
