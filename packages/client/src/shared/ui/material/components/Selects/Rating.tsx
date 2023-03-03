import { Rating as RatingMui, Typography } from '@mui/material'
import { FC } from 'react'
import { FieldValues } from 'shared/lib/helpers/formHelpers/createFieldValues'


export interface RatingProps{
    title: string,
    values: FieldValues
}

export const Rating: FC<RatingProps> = ({ title, values }) => {
  return <><Typography component="legend">{title}</Typography>
    <RatingMui
      name="simple-controlled"
      defaultValue={4}
      onChange={(event, newValue) => {
        values.setValue(newValue)
      }}
    />
  </>
}
