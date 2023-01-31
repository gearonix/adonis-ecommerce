import {MuiLoginFieldProps} from "../../types";
import {FC, useState} from "react";
import {FormControl, IconButton, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import {AiFillEye, AiFillEyeInvisible} from "icons";

export const HeadField: FC<MuiLoginFieldProps> = ({title, isPassword, readOnly = false}) => {
    const [showPassword, setShowPassword] = useState(true);

    return <FormControl variant="outlined" fullWidth size={'small'} sx={{
        marginBottom: '26px'
    }}>
        <Typography>{title}</Typography>
        <OutlinedInput
            readOnly={readOnly}
            placeholder={title}
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
