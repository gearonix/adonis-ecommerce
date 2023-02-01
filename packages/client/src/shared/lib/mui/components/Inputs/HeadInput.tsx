import {MuiLoginFieldProps} from "../../types";
import {FC, useState} from "react";
import {FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import {AiFillEye, AiFillEyeInvisible} from "icons";

export const HeadField: FC<MuiLoginFieldProps> = ({title, isPassword, readOnly = false, options, error}) => {
    const [showPassword, setShowPassword] = useState(true);

    return <FormControl variant="outlined" fullWidth size={'small'} sx={{
        marginBottom: '26px'
    }}>
        <Typography>{title}</Typography>
        <OutlinedInput
            readOnly={readOnly}
            placeholder={title}
            error={!!error?.message}
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
            inputProps={options}
            label="Password"
        />
        {error?.message && <FormHelperText error id="accountId-error" sx={{fontSize: 14}}>
            {error?.message}
        </FormHelperText>
        }

    </FormControl>
}
