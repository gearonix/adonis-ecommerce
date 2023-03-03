import { Autocomplete, TextField } from '@mui/material'
import { FC } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { Helpers } from 'shared/lib/helpers'

interface SearchSelectProps {
	values: string[],
    inputValues: {
        inputProps: UseFormRegisterReturn<string>,
        error: any
    },
}


const SearchSelect: FC<SearchSelectProps> = ({ values, inputValues }) => {
  const { inputProps, error } = inputValues
  const fieldName = inputProps.name
  const helpers = new Helpers()
  const { setValue, getValues } = useFormContext()

  const handleChange = (e: any) => {
    setValue(fieldName, e.target.innerHTML)
  }

  return <Autocomplete
    freeSolo
    id="free-solo-2-demo"
    disableClearable
    options={values}
    onChange={handleChange}
    value={getValues(fieldName)}
    renderInput={(params: any) => (
      <TextField
        {...params}
        label={helpers.capitalize(fieldName)}
        InputProps={{
          ...params.InputProps,
          type: 'search'
        }}
        error={!!error}
        helperText={error}
      />)}/>
}


export default SearchSelect
