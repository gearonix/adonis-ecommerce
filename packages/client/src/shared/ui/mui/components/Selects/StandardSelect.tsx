import {FormControl, MenuItem, Select, Typography} from '@mui/material'

export const StandardSelect = () => {
  return <FormControl size={'small'} sx={{width: '30%'}}>
    <Typography>Select</Typography>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={[30]}
      label="Age"
      onChange={() => {
      }}
      sx={{marginTop: '8px'}}
    >
      <MenuItem value={10}>Test 1</MenuItem>
      <MenuItem value={20}>Test 2</MenuItem>
      <MenuItem value={30}>Test 3</MenuItem>
    </Select>
  </FormControl>
}
