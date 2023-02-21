import * as Yup from 'yup'
import {EditProfileForm} from 'widgets/Profile/types'
import {ObjectNullable} from 'shared/types/common'
import {FieldCreator} from 'shared/lib/helpers/others/formHelpers/fieldCreator'
import {asNormalString} from 'shared/lib/helpers/others/formHelpers/fieldAddons'

const creator = new FieldCreator()

export const editProfileSchema: Yup.SchemaOf<ObjectNullable<EditProfileForm>> = Yup.object().shape({
  firstName: asNormalString(creator.optional('First name', 3, 10), 'First name'),
  lastName: asNormalString(creator.optional('Last name', 3, 10), 'Last name'),
  description: creator.optionalMaxLength('Description', 55),
  country: creator.optional('Your country', 3, 40),
  city: creator.optional('Your city', 3, 40),

})

