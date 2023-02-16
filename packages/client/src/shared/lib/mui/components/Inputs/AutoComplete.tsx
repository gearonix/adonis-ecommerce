import {Autocomplete, TextField} from '@mui/material';
import {FC} from 'react';

export const MuiAutoComplete: FC = () => {
  return <Autocomplete
    multiple
    size="small"
    options={[1, 2, 3]}
    getOptionLabel={() => 'testing'}
    defaultValue={[1]}
    renderInput={(params) => (
      <TextField {...params} label="Size small" placeholder="Favorites"/>
    )}
    sx={{width: '90%'}}
  />;
};
