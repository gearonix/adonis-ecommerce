import FormErrors from './formErrors'

export const asNormalString = (yup: any, fieldName: string) => {
  return yup.test('camelCase',
      FormErrors.withCapital(fieldName),
      (val: any) => {
        return val && val[0] == val[0].toUpperCase()
      })
      .test('notWithNumbers',
          FormErrors.notWithNumbers(fieldName),
          (val: any) => {
            return val && !(/^\d/.test(val))
          })
}
