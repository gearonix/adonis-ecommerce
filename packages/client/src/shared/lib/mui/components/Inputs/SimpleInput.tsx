import {TextField} from '@mui/material';
import {FC} from 'react';

export const MuiSimpleInput: FC = () => {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" size={'small'}
    sx={{width: '90%', marginBottom: '23px'}}/>;
};
