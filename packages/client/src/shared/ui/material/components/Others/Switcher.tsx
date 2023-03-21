import { FormControlLabel, Switch } from '@mui/material'
import { FC } from 'react'

interface Props{
    onChange: () => void,
    value: boolean,
    label: string,
    color?: any,
    Icon?: FC<any>
}


export const Switcher: FC<Props> = ({ onChange, value, label, color, Icon }) => {
  return <FormControlLabel control={
    <Switch checked={value} onChange={onChange} color={color}
    />} label={
    <>{Icon && <Icon style={{ marginBottom: '-2px', marginRight: '3px' }}/>} {label}</>}/>
}
