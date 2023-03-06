import { FormControlLabel, Switch } from '@mui/material'
import { FC } from 'react'

interface Props{
    onChange: () => void,
    value: boolean
}


export const ThemeSwitcher: FC<Props> = ({ onChange, value }) => {
  return <FormControlLabel control={
    <Switch color="secondary" checked={value} onChange={onChange}
    />} label="Dark mode" />
}
