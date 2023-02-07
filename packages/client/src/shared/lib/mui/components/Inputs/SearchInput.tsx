import {FormControl, IconButton, Input, InputAdornment} from '@mui/material';
import {AiOutlineSearch} from 'icons';
import {FC} from 'react';

export const SearchInput: FC = () => {
    return <FormControl variant="outlined" fullWidth sx={{marginBottom: '10px'}}>
        <Input
            id="outlined-adornment-password"
            sx={{height: 42}}
            placeholder={'Search'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton edge="end">
                        <AiOutlineSearch/>
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>;
};
