import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { FieldValues } from 'shared/lib/helpers'
import { FC } from 'react'

interface StandardSelectProps{
  title: string,
  values: FieldValues
}


export const StandardSelect: FC<StandardSelectProps> = ({ title, values }) => {
  const selectValues = values.autoCompleteValues()


  const onChange = (e: SelectChangeEvent<number>) => {
    const value = selectValues[e.target.value as number]
    values.setValue(value)
  }

  return <FormControl size={'small'} sx={{ width: '30%', marginTop: '20px', marginBottom: '20px' }}>
    <Typography>{title}</Typography>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      error={!!values.error}
      value={values.getValue() || 0}
      onChange={onChange}
      sx={{ marginTop: '8px' }}
      label={title}
    >
      {selectValues.map((item, idx) =>
        <MenuItem value={selectValues.indexOf(item)} key={idx}>{item}</MenuItem>)}
    </Select>
    <span>{values.error}</span>
  </FormControl>
}
