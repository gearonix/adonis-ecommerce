import {FC} from 'react';
import {Checkbox, FormControlLabel} from '@mui/material';
import {ControlsProps} from '../../types';

export const CheckBoxControl: FC<ControlsProps> = ({title, idx}) => {
  return <FormControlLabel control={<Checkbox defaultChecked style={{marginTop: -8, height: 25}}
  />} label={title} sx={{display: 'block', height: 25}} key={idx}/>;
};

