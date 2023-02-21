import * as Yup from 'yup'
import {formErrors} from 'shared/lib/helpers/others'

export class FieldCreator {
  public field(fieldName: string, min = 4, max = 12) {
    return Yup.string()
        .required(formErrors.required(fieldName))
        .min(min, formErrors.minLength(fieldName, min))
        .max(max, formErrors.maxLength(fieldName, max))
        .trim()
  }
  public email() {
    return this.field('Email', 5, 28).email(formErrors.invalidEmail())
  }
  public password() {
    return this.field('Repeat Password', 8, 16)
        .oneOf([Yup.ref('password')], formErrors.dontMatch())
  }

  public optional(fieldName: string, min = 3, max = 12): Yup.StringSchema<string | null> {
    const field = Yup.string().matches(/.{3,}/, {
      excludeEmptyString: true,
      message: formErrors.minLength(fieldName, 3),
    }).max(max, formErrors.maxLength(fieldName, 12)).nullable()
    return field as Yup.StringSchema<string | null>
  }

  public optionalMaxLength(fieldName: string, max = 12): Yup.StringSchema<string | null> {
    const field = Yup.string().max(max, formErrors.maxLength(fieldName, 12)).nullable()

    return field as Yup.StringSchema<string | null>
  }

  public number(fieldName: string, min = 20, max = 5000) {
    return Yup.number().min(min, formErrors.lessThan(fieldName, min))
        .max(max, formErrors.moreThan(fieldName, max)).required(formErrors.required(fieldName))
  }
}


