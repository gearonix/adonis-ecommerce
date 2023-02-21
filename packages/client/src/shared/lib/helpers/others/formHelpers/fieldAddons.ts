import {formErrors} from 'shared/lib/helpers/others'

export const asNormalString = (yup: any, fieldName: string) => {
  return yup.test('camelCase',
      formErrors.withCapital(fieldName),
      (val: any) => {
        return val && val[0] == val[0].toUpperCase()
      })
      .test('notWithNumbers',
          formErrors.notWithNumbers(fieldName),
          (val: any) => {
            return val && !(/^\d/.test(val))
          })
}
