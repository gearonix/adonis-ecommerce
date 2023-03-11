import { FormHelperText, InputAdornment, TextField, Typography } from '@mui/material'
import { FieldValues, FormErrors } from 'shared/lib/helpers'
import { FC } from 'react'
import { useTheme } from 'shared/lib/hooks'


interface NumberFieldProps{
  title: string,
  values: FieldValues
  Icon?: FC
}


export const NumberField: FC<NumberFieldProps> = ({ title, values, Icon }) => {
  const error = values?.error?.includes('NaN') ? FormErrors.required(title) : values.error
  const { isLight } = useTheme()
  return <>
    <Typography sx={{ color: isLight ? 'black' : 'white' }}
      style={{ marginBottom: 4, marginTop: '20px' }}>{Icon && <Icon/>} {title}</Typography>
    <TextField
      id="outlined-number"
      type="number"
      error={!!error}
      InputLabelProps={{
        shrink: true
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">
          {Icon ? <Icon/> : '$'}
        </InputAdornment>,
        ...values.inputProps
      }}
      sx={{ display: 'block', width: '353px', marginBottom: '10px' }}
      placeholder={title}
    />
    {error && <FormHelperText error id="accountId-error" sx={{ fontSize: 14, marginTop: 0 }}>
      {error}
    </FormHelperText>
    }
  </>
}
