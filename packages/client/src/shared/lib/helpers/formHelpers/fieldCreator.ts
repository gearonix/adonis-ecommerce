import * as Yup from 'yup'
import { default as FormErrors } from './formErrors'

export class FieldCreator {
  public field(fieldName: string, min = 4, max = 12) {
    return Yup.string()
        .required(FormErrors.required(fieldName))
        .min(min, FormErrors.minLength(fieldName, min))
        .max(max, FormErrors.maxLength(fieldName, max))
        .trim()
  }
  public email() {
    return this.field('Email', 5, 28).email(FormErrors.invalidEmail())
  }
  public password() {
    return this.field('Repeat Password', 8, 16)
        .oneOf([Yup.ref('password')], FormErrors.dontMatch())
  }

  public optional(fieldName: string, min = 3, max = 12): Yup.StringSchema<string | null> {
    const field = Yup.string().matches(/.{3,}/, {
      excludeEmptyString: true,
      message: FormErrors.minLength(fieldName, 3)
    }).max(max, FormErrors.maxLength(fieldName, 12)).nullable()
    return field as Yup.StringSchema<string | null>
  }

  public optionalMaxLength(fieldName: string, max = 12): Yup.StringSchema<string | null> {
    const field = Yup.string().max(max, FormErrors.maxLength(fieldName, 12)).nullable()

    return field as Yup.StringSchema<string | null>
  }

  public number(fieldName: string, min = 20, max = 5000) {
    return Yup.number().min(min, FormErrors.lessThan(fieldName, min))
        .max(max, FormErrors.moreThan(fieldName, max)).required(FormErrors.required(fieldName))
  }
}


