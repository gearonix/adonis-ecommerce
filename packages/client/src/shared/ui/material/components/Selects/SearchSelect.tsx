import { Autocomplete, TextField, Typography } from '@mui/material'
import { CSSProperties, FC } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Helpers } from 'shared/lib/helpers'
import { useTheme } from 'shared/lib/hooks'
import { AiOutlineCar } from 'shared/ui/icons'

interface SearchSelectProps {
	values: string[],
    inputValues: {
        inputProps: UseFormRegisterReturn<string>,
        error: any
    },
    Icon?: FC<{style: CSSProperties}>
}


const SearchSelect: FC<SearchSelectProps> = ({ values, inputValues, Icon }) => {
  const { inputProps, error } = inputValues
  const fieldName = inputProps.name
  const helpers = new Helpers()
  const { isLight } = useTheme()
  const { setValue, getValues } = useFormContext()
  const { t } = useTranslation()

  const handleChange = (e: any) => {
    setValue(fieldName, e.target.innerHTML)
  }

  return <>
    <Typography sx={{ color: isLight ? 'black' : 'white',
      marginBottom: '5px', marginTop: '5px' }}>
      {Icon && <Icon style={{ marginRight: '5px' }}/>}
      {t(helpers.capitalize(fieldName))}
    </Typography>
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={values}
      onChange={handleChange}
      value={getValues(fieldName)}
      sx={{ width: '340px', marginBottom: '17px' }}
      renderInput={(params: any) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            type: 'search'
          }}
          error={!!error}
          helperText={error}
          size={'small'}
        // sx={{ height: '40px' }}
        />)}/>
  </>
}


export default SearchSelect
