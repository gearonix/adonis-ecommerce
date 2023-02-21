import {FC} from 'react'
import {Checkbox, FormControlLabel} from '@mui/material'
import {ControlsProps} from '../../../types'


export const CheckBoxControl: FC<ControlsProps> = ({title, idx = 1, values}) => {
  const {getValue, setValue} = values
  const currentValue = getValue()


  const onChange = () => {
    setValue(!currentValue)
  }

  return <FormControlLabel control={<Checkbox
    style={{marginTop: -8, height: 25}}
    onChange={onChange}
    value={currentValue}
  />}
  label={title} sx={{display: 'block', height: 25}} key={idx} />
}

