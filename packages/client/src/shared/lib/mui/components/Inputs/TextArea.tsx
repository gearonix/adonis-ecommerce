import {FormControl, TextField, Typography} from "@mui/material";

export const TextArea = () => {
    return <FormControl variant="outlined" fullWidth size={'small'} sx={{
        marginBottom: '26px'
    }}>
        <Typography>Description</Typography>
        <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder={'Description'}
            defaultValue="Default Value"
            sx={{marginTop: '10px'}}
        />
    </FormControl>
}
