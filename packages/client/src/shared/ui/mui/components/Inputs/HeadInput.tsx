import {MuiLoginFieldProps} from '../../types'
import {FC, useState} from 'react'
import {FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography} from '@mui/material'
import {AiFillEye, AiFillEyeInvisible} from 'shared/ui/icons'

export const HeadField: FC<MuiLoginFieldProps> = ({title, isPassword, readOnly = false, values}) => {
  const [showPassword, setShowPassword] = useState(true)

  const {error, inputProps, maxLength} = values

  return <FormControl variant="outlined" fullWidth size={'small'} sx={{
    marginBottom: '26px',
  }}>
    <Typography>{title}</Typography>
    <OutlinedInput
      readOnly={readOnly}
      placeholder={title}
      error={!!error}
      sx={{height: 40, marginTop: '10px'}}
      type={isPassword && showPassword ? 'password' : 'text'}
      autoComplete={'on'}
      endAdornment={
                isPassword ?
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e: any) => e.preventDefault()}
                        edge="end"
                      >
                        {!showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}
                      </IconButton>
                    </InputAdornment> :
                    null
      }
      inputProps={{...inputProps, maxLength}}
      label="Password"
    />
    {error && <FormHelperText error id="accountId-error" sx={{fontSize: 14}}>
      {error}
    </FormHelperText>
    }

  </FormControl>
}
