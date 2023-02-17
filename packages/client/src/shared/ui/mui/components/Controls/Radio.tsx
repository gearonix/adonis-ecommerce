import {FC} from 'react'
import {ControlsProps} from '../../types'
import {FormControlLabel, Radio} from '@mui/material'

export const RadioControl: FC<ControlsProps> = ({title, idx}) => {
  return <FormControlLabel value={title} control={<Radio style={{marginTop: -20, height: 25}}/>}
    label={title} sx={{display: 'block', height: 25}} key={idx}/>
}
