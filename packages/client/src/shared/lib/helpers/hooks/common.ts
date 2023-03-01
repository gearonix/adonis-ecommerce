import {useContext, useEffect, useState} from 'react'
import {FieldValues, useForm as useHookForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {createFieldValues} from 'shared/lib/helpers/others'
import {Nullable} from 'shared/types/common'
import ThemeContext from 'shared/config/contexts/ThemeContext'
import {Theme} from 'shared/config/themes'
import {createTheme} from '@mui/material/styles'

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
  return {form, reg, submit: form.handleSubmit, ...form}
}


export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T | any>(null)
  useEffect(() => {
    const stored = localStorage.getItem(key)
    setValue(stored as T ?? defaultValue)
  }, [])

  useEffect(() => {
    if (value === null) return
    localStorage.setItem(key, value as string)
  }, [value])

  return {value: value ?? defaultValue, save: setValue} as const
}


export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const selectedTheme = theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(selectedTheme)
  }

  return {theme, toggleTheme, isLight: theme === Theme.LIGHT}
}


export const useMuiTheme = (theme: Theme) => {
  return createTheme({
    palette: {
      mode: theme === Theme.LIGHT ? 'light' : 'dark',
    },
  })
}
