import {Autocomplete, TextField} from '@mui/material';
import {FC} from 'react';

interface SeachSelectProps {
	values: string[],
	api: {
		setValue(value: string): void,
		value: string
	}
}


const SeachSelect: FC<SeachSelectProps> = ({values, api}) => {

	const handleChange = (e: any) => {
		api.setValue(values[e.target.value])
	}

	return <Autocomplete
		freeSolo
		id="free-solo-2-demo"
		disableClearable
		options={values}
		value={api.value}
		onChange={handleChange}
		renderInput={(params: any) => (
			<TextField
				{...params}
				label="Search input"
				InputProps={{
					...params.InputProps,
					type: 'search',
				}}
			/>)}/>
}


export default SeachSelect
