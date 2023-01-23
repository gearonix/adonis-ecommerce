import {FC, useState} from 'react';
import {
    Autocomplete,
    Backdrop,
    Button,
    ButtonGroup,
    Checkbox,
    Fade,
    FormControl,
    FormControlLabel,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Modal,
    OutlinedInput,
    Pagination,
    Paper,
    Radio,
    Rating,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

import {ControlsProps, ModalProps, MuiLoginFieldProps, MuiSelectProps} from './mui.types';
import Image from "next/image";
import {NCT} from "types/global";
import {AiFillEye, AiFillEyeInvisible, AiOutlineSearch, BsGridFill, GiHamburgerMenu} from 'icons'

export const MuiSelect: FC<MuiSelectProps> = ({value, values, label, handleChange}) => {
    return <FormControl sx={{m: 1, minWidth: 120, marginTop: '-8px', marginLeft: '3px'}} size="small">
        <InputLabel id="demo-select-small" variant={'standard'}>{label}</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={values.indexOf(value)}
            label={label}
            onChange={(e: SelectChangeEvent<number>) => {
                handleChange(values[e.target.value as number])
            }
            }
            variant={'standard'}>
            {values.map((item, idx) => <MenuItem value={values.indexOf(item)} key={idx}>{item}</MenuItem>)}
        </Select>
    </FormControl>
}


export const CheckBoxControl: FC<ControlsProps> = ({title, idx}) => {
    return <FormControlLabel control={<Checkbox defaultChecked style={{marginTop: -8, height: 25}}
    />} label={title} sx={{display: 'block', height: 25}} key={idx}/>
}

export const RadioControl: FC<ControlsProps> = ({title, idx}) => {
    return <FormControlLabel value={title} control={<Radio style={{marginTop: -20, height: 25}}/>}
                             label={title} sx={{display: 'block', height: 25}} key={idx}/>
}

export const RatingControl: FC<ControlsProps> = ({idx}) => {
    return <FormControlLabel control={<Radio style={{marginTop: -40, height: 25}}/>}
                             label={<Rating name="read-only" value={5 - idx} readOnly sx={{
                                 height: 25,
                                 marginTop: 2
                             }}/>}
                             sx={{display: 'block', height: 25, marginTop: 2}} key={idx}/>
}

export const TypographyControl: FC<ControlsProps> = ({title, idx}) => {
    return <h4 className='typo_grey' key={idx}>{title}</h4>
}

export const SizeButtons: FC = () => {
    return <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        color={'inherit'}
    >
        <Button color={'inherit'} size={'large'}><BsGridFill/></Button>
        <Button color={'inherit'} size={'large'}><GiHamburgerMenu/></Button>
    </ButtonGroup>
}

export const MuiPagination: FC = () => {
    return <Pagination count={10} variant="outlined" shape="rounded" sx={{
        position: 'absolute',
        right: 0, bottom: 0
    }}/>
}


export const MuiModal: FC<ModalProps> = ({isOpen, handleOpen, image}) => {
    return <Modal
        open={isOpen}
        onClose={() => handleOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500
        }}
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
                backgroundcolor: "red"
            }
        }}
    >
        <Fade in={isOpen} timeout={500}>
            <Image src={image} alt={''} layout='fill'
                   objectFit='contain'/>
        </Fade>
    </Modal>
}

export const MuiInput: NCT = () => {
    return <TextField id="outlined-basic" label="Outlined" variant="outlined" size={'small'}
                      sx={{width: '90%', marginBottom: '23px'}}/>
}

export const MuiAutoComplete: NCT = () => {
    return <Autocomplete
        multiple
        id="size-small-outlined"
        size="small"
        options={[1, 2, 3]}
        getOptionLabel={() => 'testing'}
        defaultValue={[1]}
        renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites"/>
        )}
        sx={{width: '90%'}}
    />
}

export const MuiTable: NCT = () => {
    const rows = [{name: 'Item', value: 'Description'}]

    return (
        <div style={{width: '60%'}}>
            <TableContainer component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead sx={{backgroundColor: '#EFF2F4'}}>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}


export const MuiLoginField: FC<MuiLoginFieldProps> = ({title, isPassword}) => {
    const [showPassword, setShowPassword] = useState(true);

    return <FormControl variant="outlined" fullWidth size={'small'} sx={{
        marginBottom: '26px'
    }}>
        <Typography>{title}</Typography>
        <OutlinedInput
            placeholder={title}
            id="outlined-adornment-password"
            sx={{height: 40, marginTop: '10px'}}
            type={isPassword && showPassword ? 'password' : 'text'}
            endAdornment={
                isPassword ?
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e: any) => e.preventDefault()}
                            edge="end"
                        >
                            {!showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}
                        </IconButton>
                    </InputAdornment>
                    : null
            }
            label="Password"
        />
    </FormControl>
}

export const SearchInput: NCT = () => {
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
    </FormControl>
}
