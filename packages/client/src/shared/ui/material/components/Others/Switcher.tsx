import { FormControlLabel, Switch } from '@mui/material'
import { FC } from 'react'

interface Props{
    onChange: () => void,
    value: boolean,
    label: string,
    color?: any
}


export const Switcher: FC<Props> = ({ onChange, value, label, color }) => {
  return <FormControlLabel control={
    <Switch checked={value} onChange={onChange} color={color}
    />} label={label}/>
}
