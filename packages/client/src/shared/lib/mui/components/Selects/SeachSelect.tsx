import {Autocomplete, TextField} from '@mui/material';
import {FC, useState} from 'react';
import {FieldError} from 'react-hook-form';

interface SeachSelectProps {
	values: string[],
	api: {
		setValue(value: string): void,
		value: string,
		error: FieldError | undefined
	},
	label: string
}


const SeachSelect: FC<SeachSelectProps> = ({values, api, label}) => {
  const {value, setValue} = api;

  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: any) => {
    const value = e.target.innerHTML;
    setValue(value);
    setInputValue(value);
  };
  const isInputError = !values.includes(inputValue) && inputValue.length > 0;
  const errorMessage = `Incorrect ${label}`;

  console.log(isInputError);
  return <Autocomplete
    freeSolo
    id="free-solo-2-demo"
    disableClearable
    options={values}
    value={value}
    onChange={handleChange}
    renderInput={(params: any) => (
      <TextField
        {...params}
        label={label}
        InputProps={{
          ...params.InputProps,
          type: 'search',
        }}
        error={isInputError}
        helperText={isInputError ? errorMessage : ''}
        value={inputValue}
        onChange={(e: any) => {
          console.log('ONCAHGEN', e.target.value);
          setInputValue(e.target.value);
        }}
      />)}/>;
};


export default SeachSelect;
