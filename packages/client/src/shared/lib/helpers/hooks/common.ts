import {useState} from 'react'
import {FieldValues, useForm as useHookForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {createFieldValues} from 'shared/lib/helpers/others'
import {Nullable} from 'shared/types/common'

export const useBooleanState = (initialValue = false) => {
  const [isOpen, setIsOpened] = useState<boolean>(initialValue)

  const close = () => setIsOpened(false)
  const open = () => setIsOpened(true)
  const toggle = () => setIsOpened(!isOpen)

  return {
    close, open, toggle, isOpen,
  }
}

type DefaultValues = Partial<{defaultValues: any, selectValues: any}>

export const useForm = <T extends FieldValues>(schema: Nullable<Yup.ObjectSchema<any>>, values:
    DefaultValues = {}) => {
  const {defaultValues, selectValues} = values
  const form = useHookForm<T>({resolver: schema ? yupResolver(schema) : undefined, defaultValues})
  const reg = createFieldValues(form, selectValues)
  return {form, reg, submit: form.handleSubmit}
}
