import * as Yup from 'yup'
import {EditProfileForm} from "widgets/Profile/types";
import {ObjectNullable} from "shared/types/helpers";
import {createMaxLengthField, createOptionalField} from "shared/helpers/others/formHelpers";

export const editProfileSchema: Yup.SchemaOf<ObjectNullable<EditProfileForm>> = Yup.object().shape({
    firstName: createOptionalField('First name', 3, 10),
    lastName: createOptionalField('Last name', 3, 10),
    description: createMaxLengthField('Description', 55),
    country: createOptionalField('Your country', 4, 10),
    city: createOptionalField('Your city', 4, 10)

}).camelCase()
