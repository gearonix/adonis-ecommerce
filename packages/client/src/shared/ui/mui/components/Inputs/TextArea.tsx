import {FormControl, TextField, Typography} from '@mui/material'
import {FC} from 'react'
import {MuiLoginFieldProps} from 'shared/ui/mui/types'
import {useTheme} from 'shared/lib/helpers/hooks/common'

export const TextArea: FC<MuiLoginFieldProps> = ({title, values}) => {
  const {isLight} = useTheme()
  const {error, inputProps, maxLength} = values

  return <FormControl variant="outlined" fullWidth size={'small'} sx={{
    marginBottom: '26px',
  }}>
    <Typography sx={{color: isLight ? 'black' : 'white'}}>{title}</Typography>
    <TextField
      id="outlined-multiline-static"
      error={!!error}
      multiline
      rows={4}
      placeholder={'Description'}
      defaultValue="Default Value"
      sx={{marginTop: '10px'}}
      inputProps={{...inputProps, maxLength}}
    />
  </FormControl>
}
