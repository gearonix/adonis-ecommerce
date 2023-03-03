import { FC } from 'react'
import { FormControlLabel, Radio as MuiRadio } from '@mui/material'


export interface RadioControlProps{
  label: string,
  name: string,
  checked: boolean
}

export const Radio: FC<RadioControlProps> = ({ label, name, checked }) => {
  return <FormControlLabel value={name} control={<MuiRadio style={{ marginTop: -20, height: 25 }} checked={checked}/>}
    label={label} sx={{ display: 'block', height: 25 }} />
}
