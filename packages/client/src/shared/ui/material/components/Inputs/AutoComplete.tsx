import { Autocomplete, TextField } from '@mui/material'
import { FC } from 'react'
import { FieldValues } from 'shared/lib/helpers'

interface AutoCompleteProps{
  title: string,
  values: FieldValues
}

export const AutoComplete: FC<AutoCompleteProps> = ({ title, values }) => {
  if (!values) return null

  const currentValues = values.autoCompleteValues()

  const onChange = (e: any, newValue: string[]) => {
    values.setValue(newValue)
  }

  return <Autocomplete
    multiple
    size="small"
    onChange={onChange}
    options={currentValues}
    getOptionLabel={(val: string) => val}
    renderInput={(params) => (
      <TextField {...params} label={title} placeholder={title} />
    )}
    sx={{ width: '90%' }}
  />
}
