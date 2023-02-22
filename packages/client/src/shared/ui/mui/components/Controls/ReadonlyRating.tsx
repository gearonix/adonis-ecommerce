import {FC} from 'react'
import {FormControlLabel, Radio, Rating as MuiRating} from '@mui/material'
import {RadioControlProps} from 'shared/ui/mui/components/Controls/Radio'

export const ReadonlyRating: FC<RadioControlProps> = ({name, checked}) => {
  return <FormControlLabel control={<Radio style={{marginTop: -23, height: 25}} checked={checked}/>}
    label={<MuiRating name="read-only" value={+name} readOnly sx={{
      height: 25,
      marginTop: -15,
    }}/>}
    sx={{display: 'block', height: 25, marginTop: 2}} value={name}/>
}
