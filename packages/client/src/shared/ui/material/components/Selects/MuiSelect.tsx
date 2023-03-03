import { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { MuiSelectProps } from '../../types'

export const MuiSelect: FC<MuiSelectProps> = ({ title, values }) => {
  const selectValues = values.autoCompleteValues()

  const onChange = (e: SelectChangeEvent<number>) => {
    console.log(selectValues[e.target.value as number])
  }

  return <FormControl sx={{ m: 1, minWidth: 120, marginTop: '-8px', marginLeft: '3px' }} size="small">
    <InputLabel id="demo-select-small" variant={'standard'}>{title}</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      label={title}
      onChange={onChange}
      variant={'standard'}>
      {selectValues.map((item, idx) =>
        <MenuItem value={selectValues.indexOf(item)} key={idx}>{item}</MenuItem>)}
    </Select>
  </FormControl>
}
