import {FormControl, TextField, Typography} from '@mui/material'
import {FC} from 'react'
import {MuiLoginFieldProps} from 'shared/ui/mui/types'

export const TextArea: FC<MuiLoginFieldProps> = ({title, values}) => {
  const {error, inputProps} = values

  return <FormControl variant="outlined" fullWidth size={'small'} sx={{
    marginBottom: '26px',
  }}>
    <Typography>{title}</Typography>
    <TextField
      id="outlined-multiline-static"
      error={!!error}
      multiline
      rows={4}
      placeholder={'Description'}
      defaultValue="Default Value"
      sx={{marginTop: '10px'}}
      inputProps={inputProps}
    />
  </FormControl>
}
