import {Rating as RatingMui, Typography} from '@mui/material';
import {FC} from 'react';
import {ReturnFieldValues} from 'shared/lib/helpers/others/formHelpers';


export interface RatingProps{
    title: string,
    values: ReturnFieldValues<any>
}

export const Rating: FC<RatingProps> = ({title, values}) => {


    return <><Typography component="legend">{title}</Typography>
    <RatingMui
        name="simple-controlled"
        value={values.getValue()}
        onChange={(event, newValue) => {
            values.setValue(newValue);
        }}
    />
    </>
}
