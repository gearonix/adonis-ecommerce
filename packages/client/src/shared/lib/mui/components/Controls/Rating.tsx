import {FC} from 'react';
import {ControlsProps} from '../../types';
import {FormControlLabel, Radio, Rating} from '@mui/material';

export const RatingControl: FC<ControlsProps> = ({idx}) => {
  return <FormControlLabel control={<Radio style={{marginTop: -40, height: 25}}/>}
    label={<Rating name="read-only" value={5 - idx} readOnly sx={{
      height: 25,
      marginTop: 2,
    }}/>}
    sx={{display: 'block', height: 25, marginTop: 2}} key={idx}/>;
};
