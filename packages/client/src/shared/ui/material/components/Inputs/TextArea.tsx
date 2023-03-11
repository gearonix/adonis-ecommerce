import { FormControl, FormHelperText, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { MuiLoginFieldProps } from 'shared/ui/material/types'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { Display } from 'shared/lib/components'

export const TextArea: FC<MuiLoginFieldProps> = ({ title, values, Icon, placeholder }) => {
  const { isLight } = useTheme()
  const { t } = useTranslation()
  const { error, inputProps, maxLength } = values

  return <FormControl variant="outlined" fullWidth size={'small'} sx={{
    marginBottom: '26px',
    marginTop: '14px'
  }}>
    <Typography sx={{ color: isLight ? 'black' : 'white' }}>
      {Icon && <Icon/>} {title}</Typography>
    <TextField
      id="outlined-multiline-static"
      error={!!error}
      multiline
      rows={4}
      placeholder={placeholder || t('Description') || ''}
      sx={{ marginTop: '10px', width: '98%' }}
      inputProps={{ ...inputProps, maxLength }}
    />
  </FormControl>
}
