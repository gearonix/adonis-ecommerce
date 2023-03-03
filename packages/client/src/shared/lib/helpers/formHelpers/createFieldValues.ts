import { FieldValues as FormFieldValues, Path, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form'


export interface FieldValues<T extends FormFieldValues = any> {
    inputProps: UseFormRegisterReturn<Path<T>>,
    error: string,
    setValue: (value: any) => void,
    getValue: () => any,
    maxLength: number | undefined,
    autoCompleteValues: () => Array<string>
}

export const createFieldValues = <T extends FormFieldValues>(form : UseFormReturn<T>,
  selectValues: any = {}) =>
    (name: Path<T>, maxLength?: number): FieldValues<T> => {
      return {
        inputProps: form.register(name),
        error: form.formState.errors[name]?.message as string,
        setValue: (value) => form.setValue(name, value),
        getValue: () => form.getValues(name),
        maxLength,
        autoCompleteValues: () => selectValues[name]
      }
    }

export type CreateFieldValues<T extends FormFieldValues> = ReturnType<typeof createFieldValues<T>>

