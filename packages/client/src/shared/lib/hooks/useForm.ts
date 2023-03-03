import { DeepPartial, FieldValues, useForm as useHookForm } from 'react-hook-form'
import { Nullable } from 'shared/types/common'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createFieldValues } from 'shared/lib/helpers'

type DefaultValues<T> = Partial<{defaultValues: any, selectValues: any}>

export const useForm = <T extends FieldValues>(schema: Nullable<Yup.ObjectSchema<any>>, values:
    DefaultValues<T> = {}) => {
  const { defaultValues, selectValues } = values
  const form = useHookForm<T>({ resolver: schema ? yupResolver(schema) : undefined, defaultValues })
  const reg = createFieldValues(form, selectValues)
  return { form, reg, submit: form.handleSubmit, ...form, errors: form.formState.errors }
}
