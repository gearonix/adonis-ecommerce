import { FormControl, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { MuiLoginFieldProps } from 'shared/ui/material/types'
import { useTheme } from 'shared/lib/hooks/useTheme'

export const TextArea: FC<MuiLoginFieldProps> = ({ title, values }) => {
  const { isLight } = useTheme()
  const { error, inputProps, maxLength } = values

  return <FormControl variant="outlined" fullWidth size={'small'} sx={{
    marginBottom: '26px',
    marginTop: '14px'
  }}>
    <Typography sx={{ color: isLight ? 'black' : 'white' }}>{title}</Typography>
    <TextField
      id="outlined-multiline-static"
      error={!!error}
      multiline
      rows={4}
      placeholder={'Description'}
      sx={{ marginTop: '10px', width: '98%' }}
      inputProps={{ ...inputProps, maxLength }}
    />
  </FormControl>
}
