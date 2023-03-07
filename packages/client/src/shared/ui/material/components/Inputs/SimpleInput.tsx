import { TextField } from '@mui/material'
import { FC } from 'react'
import { FieldValues } from 'shared/lib/helpers'

interface Props{
  placeholder: string,
  values: FieldValues
}

export const MuiSimpleInput: FC<Props> = ({ placeholder, values }) => {
  return <TextField id="outlined-basic" label={placeholder} variant="outlined" size={'small'}
    sx={{ width: '90%', marginBottom: '23px' }} inputProps={{ ...values.inputProps }}/>
}
