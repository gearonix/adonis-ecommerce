import {FC} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {BsGridFill, GiHamburgerMenu} from 'icons';

export const SizeButtons: FC = () => {
    return <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        color={'inherit'}>
        <Button color={'inherit'} size={'large'}><BsGridFill/></Button>
        <Button color={'inherit'} size={'large'}><GiHamburgerMenu/></Button>
    </ButtonGroup>;
};
