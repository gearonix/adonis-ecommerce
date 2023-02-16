import {FC} from 'react';
import {ControlsProps} from '../../types';

export const TypographyControl: FC<ControlsProps> = ({title, idx}) => {
  return <h4 className='typo_grey' key={idx}>{title}</h4>;
};
