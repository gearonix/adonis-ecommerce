import { InputAdornment, TextField } from '@mui/material'
import { FieldValues, FormErrors } from 'shared/lib/helpers'
import { FC } from 'react'


interface NumberFieldProps{
  title: string,
  values: FieldValues
}


export const NumberField: FC<NumberFieldProps> = ({ title, values }) => {
  const error = values?.error?.includes('NaN') ? FormErrors.required(title) : values.error

  return <><TextField
    id="outlined-number"
    label={title}
    type="number"
    error={!!error}
    InputLabelProps={{
      shrink: true
    }}
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
      ...values.inputProps
    }}
  />
  <span>{error}</span>
  </>
}
