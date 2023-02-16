import {FC} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {MuiSelectProps} from './../../types';

export const MuiSelect: FC<MuiSelectProps> = ({value, values, label, handleChange}) => {
  return <FormControl sx={{m: 1, minWidth: 120, marginTop: '-8px', marginLeft: '3px'}} size="small">
    <InputLabel id="demo-select-small" variant={'standard'}>{label}</InputLabel>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={values.indexOf(value)}
      label={label}
      onChange={(e: SelectChangeEvent<number>) => {
        handleChange(values[e.target.value as number]);
      }
      }
      variant={'standard'}>
      {values.map((item, idx) =>
        <MenuItem value={values.indexOf(item)} key={idx}>{item}</MenuItem>)}
    </Select>
  </FormControl>;
};
