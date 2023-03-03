import * as Yup from 'yup'
import { asNormalString } from 'shared/lib/helpers/formHelpers/fieldAddons'
import { FormErrors } from 'shared/lib/helpers'
import { FieldCreator } from 'shared/lib/helpers/formHelpers/fieldCreator'


const creator = new FieldCreator()

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
  images: Yup.array().min(1, FormErrors.oneImage('Your product'))
      .max(4, FormErrors.moreImages('Your product', 4)),
  material: asNormalString(creator.field('Product material', 4, 20), 'Product material')
})
